<template>
  <el-container>
    <el-main>
      <br>
      <el-upload class="elmro"
                 ref="upload"
                 :action="uploadAction"
                 :headers="uploadHead"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :file-list="fileList"
                 :auto-upload="false"
                 :limit="1000"
                 :multiple="true"
                 accept=".zip, .xml, .gz">
        <el-button slot="trigger"
                   size="small"
                   type="primary">选取文件</el-button>
        <div slot="tip"
             class="el-upload__tip">支持.zip,.xml,.gz格式的文件</div>
        <el-button style="margin-left: 10px;"
                   size="small"
                   type="success"
                   @click="submitUpload">上传到服务器</el-button>
      </el-upload>
      <el-button type="primary"
                 size="mini"
                 style="width:80px; margin-left:2px"
                 @click="parm">参数配置</el-button>
      <el-button type="primary"
                 :loading="isloading"
                 size="mini"
                 style="width:80px; margin-left:2px"
                 @click="analysis">解析</el-button>
      <br>
      <br>
      <div v-if="isshow">
        <h3>待解析进数据库的表</h3>
        <v-selectTable ref="seltab"
                       :tableData='needTabel'
                       :columns="columns"> </v-selectTable>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import selectTable from '../../basic/selectTable'
export default {
  components: {
    'v-selectTable': selectTable
  },
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user
    })
  },
  data () {
    return {
      uploadAction: '',
      head: {},
      uploadHead: {},
      needTabel: [], // 待解析的总表
      columns: { title: '名称' },
      table: [], // 服务器端传入的带解析的表
      multipleSelection: [], // 选中的带解析的表
      fileList: [], // 被选取文件
      isloading: false, // 解析是否正在经行
      isshow: false
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
    this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'bulkcm' }
    this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'bulkcm', 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
    this.uploadAction = this.user.httppath + '/api/Bulkcm/Upload'
    var heads = { headers: this.head }
    this.$http.post(this.user.httppath + '/api/Bulkcm/GetTables',
      {},
      heads
    ).then((response) => {
      this.needTabel = response
      this.total = this.needTabel.length
      for (let i = 0; i < response.length; i++) {
        if (response[i].isOk === 'True') {
          this.table.push(this.needTabel[i])
        }
      }
      this.$refs.seltab.multipleSelection = this.table
      // setTimeout(() => {
      //   this.$refs.seltab.toggleSelection(this.table)
      // }, 250)
    }).catch((error) => {
      this.$notify({
        title: '警告',
        message: error,
        type: 'warning'
      })
    })
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    parm () {
      this.isshow = !this.isshow
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
      this.isloading = true
      var tables = []
      this.multipleSelection = this.$refs.seltab.multipleSelection
      for (var key in this.multipleSelection) {
        tables.push(this.multipleSelection[key].title)
      }
      this.$http.post(this.user.httppath + '/api/Bulkcm/BulkParse',
        { tableName: tables },
        { headers: this.head }
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
    submitUpload () {
      if (this.prom.prom_pname === 'default') {
        this.$notify({
          title: '警告',
          message: '没有权限对公共工程进行操作',
          type: 'warning'
        })
      } else {
        this.$refs.upload.submit()
      }
    },
    handleRemove (file, fileList) {
      console.log('这是函数 handleRemove')
    },
    handlePreview (file) {
      console.log('这是函数 handlePreview')
    }
  },
  destroyed () {
    this.needTabel = []
  }
}
</script>
<style>
.elmro {
  text-align: center;
}
.pagination-wrapper {
  float: right;
}
</style>