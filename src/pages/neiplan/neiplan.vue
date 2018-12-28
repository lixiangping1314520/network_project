<template>
  <div style="padding-left:10px;">
    <br>
    <div>
      <el-row :gutter="20">
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-upload ref="uploadUmts"
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
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-upload ref="uploadLte"
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
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-upload ref="uploadCell"
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
                   class="el-upload__tip">支持.csv格式文件</div>
            </el-upload>
          </div>
        </el-col>
      </el-row>
    </div>
    <br>
    <div>
      <div style="display:inline;">
        <el-button size="small"
                   type="success"
                   @click="submitUpload">上传到服务器</el-button>
        <a @click="down">模板下载 </a>
      </div>
    </div>
    <br>
    <el-dialog title="参数设置"
               :visible.sync="dialogVisible"
               :close-on-click-modal="false"
               :append-to-body="atb_format">
      <el-menu :default-active="activeIndex"
               mode="horizontal"
               text-color="black"
               active-text-color="#409EFF"
               style="text-align:center; "
               @select="handleSelect">
        <el-menu-item index="1">4G-4G 宏站</el-menu-item>
        <el-menu-item index="2">4G-4G 室分</el-menu-item>
        <el-menu-item index="3">4G-3G</el-menu-item>
        <el-menu-item index="4">RSI/PCI 规划</el-menu-item>
      </el-menu>
      <div v-if="ptype === 'lteOutdoor'">
        <label>邻区数量 异频:</label>
        <input placeholder="请输入数字"
               v-model="form.differentFrequency"
               @change="numberT(form.differentFrequency)">
        <label>个</label>
        <br>
        <br>
        <label>邻区数量 同频:</label>
        <input placeholder="请输入数字"
               v-model="form.sameFrequency"
               @change="numberT(form.sameFrequency)">
        <label>个</label>
        <br>
        <br>
        <label>最大 筛选距离:</label>
        <input placeholder="请输入数字"
               v-model="form.distance"
               @change="numberT(form.distance)">
        <label>km</label>
        <br>
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
        <label>个</label>
        <br>
        <br>
        <label>最大 筛选距离:</label>
        <input placeholder="请输入数字"
               v-model="form.distance_3G"
               @change="numberT(form.distance_3G)">
        <br>
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
        <br>
        <label>RSN 复用距离:</label>
        <input placeholder="请输入数字"
               v-model="form.pci_distance"
               @change="numberT(form.pci_distance)">
      </div>
    </el-dialog>
    <el-button type="primary"
               size="mini"
               style="width:80px"
               @click="parconfig">参数设置</el-button>
    <el-button type="primary"
               :loading="isloading"
               size="mini"
               style="width:80px; margin-left:2px"
               @click="analysis">解析</el-button>
    <el-button type="primary"
               :loading="isloading_resultTable"
               size="mini"
               style="width:80px; margin-left:2px"
               @click="GetresultDate">呈现</el-button>
    <v-exportTable style="margin-left:2px"
                   :tableData="oneTable"></v-exportTable>
    <el-form :inline="true"
             class="demo-form-inline"
             style="margin-top: 10px">
      <el-form-item style="margin-bottom: 10px">
        <el-select v-model="oneTableName"
                   size="mini"
                   placeholder="表名称"
                   style="width:200px">
          <el-option v-for="item in resultTableName"
                     :key="item.tableName"
                     :label="item.tableName"
                     :value="item.tableName">{{item.tableName}}</el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <v-pageTable :tableData="oneTable"> </v-pageTable>
    <!-- <el-select v-model="oneTableName"
                 size="mini"
                 placeholder="规划结果">
        <el-option v-for="item in resultTableName"
                   :key="item.value"
                   :label="item.value"
                   :value="item.value">
        </el-option>
      </el-select> -->
    <br>
    <br>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import exportTable from '../../basic/exportTable'
import pageTable from '../../basic/pageTable.vue'
import fileDownload from '../../basic/fileDownload.js'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user
    })
  },
  components: {
    'v-exportTable': exportTable,
    'v-pageTable': pageTable
  },
  data () {
    return {
      uploadAciton: '', // 上传文件的url
      atb_format: false,
      // processNum: 0,
      head: {}, // axios请求头部
      gsmDate: {},
      lteDate: {},
      uploadHead: {}, // 上传文件请求头部
      fileListUmts: [],
      fileListLte: [],
      fileListCell: [],
      activeIndex: '1', // 参数设置 活跃页面
      dialogVisible: false, // 是否呈现弹出框
      // activeName: 'second',
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
      resultTable: {}, // 所有规划结果表
      resultTableName: [{
        tableName: '3g 邻区规划'
      }, {
        tableName: '4g 邻区规划'
      }, {
        tableName: 'pci/rsn 规划'
      }],
      oneTableName: '', // 某一规划结果表名称
      oneTable: [], // 某一规划结果表数据
      legitimat: true,
      isloading: false,
      isloading_resultTable: false
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
    this.gsmDate = { 'neifiletype': 'umts' }
    this.lteDate = { 'neifiletype': 'lte' }
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    parconfig () {
      this.dialogVisible = true
    },
    down () {
      var url = this.user.httppath + '/api/FileDown/Download'
      var head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'neiplan' }
      fileDownload(url, head)
    },
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
        // this.GetresyltDate()
      }).catch((error) => {
        this.isloading = false
        this.$notify({
          title: '警告',
          message: error,
          type: 'warning'
        })
      })
    },
    GetresultDate () {
      this.isloading_resultTable = true
      this.$http.post(this.user.httppath + '/api/NeiPlan/Result',
        {},
        { 'headers': this.head }
      ).then((response) => {
        console.log(response)
        this.isloading_resultTable = false
        this.$notify({
          title: '成功',
          message: '已获取数据',
          type: 'success'
        })
        this.resultTable = response
      }).catch((error) => {
        this.isloading_resultTable = false
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
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.ptype = 'lteOutdoor'
      } else if (key === '2') {
        this.ptype = 'lteIndoor'
      } else if (key === '3') {
        this.ptype = 'umtsIndoor'
      } else {
        this.ptype = ''
      }
    },
    // handleClick (tab, event) {
    //   console.log('这是 handleClick 函数')
    //   var index = tab.$vnode.child.index
    //   console.log(index)
    //   if (index === '0') {
    //     this.ptype = 'lteOutdoor'
    //   } else if (index === '1') {
    //     this.ptype = 'lteIndoor'
    //   } else if (index === '2') {
    //     this.ptype = 'umtsIndoor'
    //   } else {
    //     this.ptype = ''
    //   }
    // },
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
  },
  watch: {
    oneTableName (newVal) {
      if (newVal === '4g 邻区规划') {
        this.oneTable = this.resultTable['lte']
      } else if (newVal === '3g 邻区规划') {
        this.oneTable = this.resultTable['umts']
      } else if (newVal === 'pci/rsn 规划') {
        this.oneTable = this.resultTable['pci']
      } else {
        this.oneTable = []
      }
    }
  }
}
</script>
<style>
.elmro {
  text-align: center;
}
</style>