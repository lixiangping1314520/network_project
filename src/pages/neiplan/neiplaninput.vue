<template>
  <el-container>
    <el-aside width="500px">
      <br>
      <br>
      <el-upload class="elmro"
                 ref="uploadUmts"
                 :action="uploadAciton"
                 :headers="uploadHead"
                 :data="gsmDate"
                 bind:on-preview="handlePreviewUmts"
                 :on-remove="handleRemoveUmts"
                 :file-list="fileListUmts"
                 :auto-upload="false"
                 :limit="1"
                 :multiple="true"
                 accept=".txt">
        <el-button slot="trigger"
                   size="small"
                   type="primary">3g 宏站文件</el-button>
        <div slot="tip"
             class="el-upload__tip">支持.txt格式的文件</div>
      </el-upload>
      <br>
      <el-upload class="elmro"
                 ref="uploadLte"
                 :action="uploadAciton"
                 :headers="uploadHead"
                 :data="lteDate"
                 :on-preview="handlePreviewLte"
                 :on-remove="handleRemoveLte"
                 :file-list="fileListLte"
                 :auto-upload="false"
                 :limit="1"
                 :multiple="true"
                 accept=".txt">
        <el-button slot="trigger"
                   size="small"
                   type="primary">4g 宏站文件</el-button>
        <div slot="tip"
             class="el-upload__tip">支持.txt格式的文件</div>
      </el-upload>
      <br>
      <el-upload class="elmro"
                 ref="uploadCell"
                 :action="uploadAciton"
                 :headers="uploadHead"
                 :on-preview="handlePreviewCell"
                 :on-remove="handleRemoveCell"
                 :file-list="fileListCell"
                 :auto-upload="false"
                 :limit="1"
                 :multiple="true"
                 accept=".csv">
        <el-button slot="trigger"
                   size="small"
                   type="primary">规划小区文件</el-button>
        <div slot="tip"
             class="el-upload__tip">支持.csv格式的文件</div>

      </el-upload>
      <el-button style="margin-left: 200px;"
                 size="small"
                 type="success"
                 @click="submitUpload">上传到服务器</el-button>
      <br>
    </el-aside>
    <el-main>
      <div style="margin-left: 200px;">参数设置</div>
      <el-tabs v-model="activeName"
               type="card"
               @tab-click="handleClick">
        <el-tab-pane label="4G-4G 宏站"
                     name="first">4G-4G 宏站</el-tab-pane>
        <el-tab-pane label="4G-4G 室分"
                     name="second">4G-4G 室分</el-tab-pane>
        <el-tab-pane label="4G-3G"
                     name="third">4G-3G</el-tab-pane>
        <el-tab-pane label="RSI/PCI 规划"
                     name="fourth">RSI/PCI 规划</el-tab-pane>
      </el-tabs>
      <div v-if="ptype === 'lteOutdoor'">
        <label>邻区数量 异频:</label>
        <input placeholder="请输入数字"
               v-model="form.differentFrequency"
               @change="numberT(form.differentFrequency)">
        <label>个</label>
        <br>
        <label>邻区数量 同频:</label>
        <input placeholder="请输入数字"
               v-model="form.sameFrequency"
               @change="numberT(form.sameFrequency)">
        <label>个</label>
        <br>
        <label>最大 筛选距离:</label>
        <input placeholder="请输入数字"
               v-model="form.distance"
               @change="numberT(form.distance)">
        <label>km</label>
        <br>
        <label>优先 筛选距离:</label>
        <input placeholder="请输入数字"
               v-model="form.first_diistance"
               @change="numberT(form.first_diistance)">
        <label>km</label>
      </div>
      <div v-else-if="ptype === 'lteIndoor'">
        <label>邻区数量:</label>
        <input placeholder="请输入数字"
               v-model="form.indoorFrequency"
               @change="numberT(form.indoorFrequency)">
        <label>个</label>
        <br>
        <label>最大 筛选距离:</label>
        <input placeholder="请输入数字"
               v-model="form.distance_indoor"
               @change="numberT(form.distance_indoor)">
        <label>个</label>
      </div>
      <div v-else-if="ptype === 'umtsIndoor'">
        <label>邻区数量:</label>
        <input placeholder="请输入数字"
               v-model="form.Frequency_3G"
               @change="numberT(form.Frequency_3G)">
        <label>邻区数量:</label>
        <br>
        <label>最大 筛选距离:</label>
        <input placeholder="请输入数字"
               v-model="form.distance_3G"
               @change="numberT(form.distance_3G)">
        <br>
        <label>优先 筛选距离:</label>
        <input placeholder="请输入数字"
               v-model="form.first_diistance_3G"
               @change="numberT(form.first_diistance_3G)">
      </div>
      <div v-else>
        <label>Pci 规划是否考虑异频点:</label>
        <el-radio v-model="form.pciNeedFrequencyDifference"
                  label="1">是</el-radio>
        <el-radio v-model="form.pciNeedFrequencyDifference"
                  label="0">否</el-radio>
        <br>
        <label>RSN 复用距离:</label>
        <input placeholder="请输入数字"
               v-model="form.pci_distance"
               @change="numberT(form.pci_distance)">
      </div>
      <br>
      <br>
      <el-button type="primary"
                 :loading="isloading"
                 size="mini"
                 @click="analysis">解析</el-button>
      <!-- <h1>解析进度</h1>
      <el-progress class="aprogress"
                   :percentage=this.processNum></el-progress> -->
    </el-main>
  </el-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user
    })
  },
  data () {
    return {
      uploadAciton: '',
      processNum: 0,
      head: {},
      gsmDate: {},
      lteDate: {},
      uploadHead: {},
      fileListUmts: [],
      fileListLte: [],
      fileListCell: [],
      activeName: 'second',
      ptype: '',
      form: {
        'differentFrequency': '16',
        'sameFrequency': '25',
        'distance': '5',
        'first_diistance': '2',
        'indoorFrequency': '16',
        'distance_indoor': '16',
        'Frequency_3G': '20',
        'distance_3G': '5',
        'first_diistance_3G': '2',
        'pciNeedFrequencyDifference': '1',
        'pci_distance': '5'
      },
      legitimat: true,
      isloading: false
    }
  },
  created () {
    if (sessionStorage.getItem('pname')) {
      this.setpname_prom(sessionStorage.getItem('pname'))
    }
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('pname', sessionStorage.getItem('pname'))
    })
    this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'neipaln' }
    this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'neipaln', 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
    this.uploadAciton = this.user.httppath + '/api/NeiPlan/Upload'
    this.gsmDate = {'neifiletype': 'umts'}
    this.lteDate = {'neifiletype': 'lte'}
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    analysis () {
      if (this.prom.prom_pname === 'default') {
        this.$notify({
          title: '警告',
          message: '没有权限对公有工程进行数据入库',
          type: 'warning'
        })
        return
      }
      this.dbInput()
    },
    dbInput () {
      console.log('dbInput')
      if (!this.legitimat) {
        this.$notify({
          title: '警告',
          message: '参数存在错误',
          type: 'warning'
        })
        return
      }
      this.isloading = true
      var heads = { headers: this.head }
      this.$http.post(this.user.httppath + '/api/NeiPlan/Analysis',
        { form: this.form },
        heads
      ).then((response) => {
        this.isloading = false
        this.$notify({
          title: '成功',
          message: '解析完成',
          type: 'success'
        })
      }).catch((error) => {
        this.isloading = false
        this.$notify({
          title: '警告',
          message: error,
          type: 'warning'
        })
      })
    },
    handleRemoveUmts (file, fileList) {
      console.log(file, fileList)
    },
    handleRemoveLte (file, fileList) {
      console.log(file, fileList)
    },
    handleRemoveCell (file, fileList) {
      console.log(file, fileList)
    },
    handlePreviewUmts (file) {
      console.log(file)
    },
    handlePreviewLte (file) {
      console.log(file)
    },
    handlePreviewCell (file) {
      console.log(file)
    },
    submitUpload () {
      console.log('这是函数 submitUpload')
      if (this.prom.prom_pname === 'default') {
        this.$notify({
          title: '警告',
          message: '没有权限对公共工程进行操作',
          type: 'warning'
        })
      } else {
        console.log(this.head)
        this.$refs.uploadUmts.submit()
        this.$refs.uploadCell.submit()
        this.$refs.uploadLte.submit()
      }
    },
    handleClick (tab, event) {
      console.log('这是 handleClick 函数')
      var index = tab.$vnode.child.index
      console.log(index)
      if (index === '0') {
        this.ptype = 'lteOutdoor'
      } else if (index === '1') {
        this.ptype = 'lteIndoor'
      } else if (index === '2') {
        this.ptype = 'umtsIndoor'
      } else {
        this.ptype = ''
      }
    },
    numberT (value) {
      if (value === '') { return }
      console.log('这是 intTest 函数')
      console.log(value)
      if (isNaN(value)) {
        this.$notify({
          title: '警告',
          message: '不是数字',
          type: 'warning'
        })
        this.legitimat = false
        return false
      }
      this.legitimat = true
      return true
    }
  }
}
</script>
<style>
.elmro {
  text-align: center;
}
</style>