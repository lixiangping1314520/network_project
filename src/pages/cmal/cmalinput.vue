<template>
  <el-container>
    <el-aside width="500px">
      <br>
      <br>
      <el-upload class="elmro"
                 ref="upload"
                 action="uploadAction"
                 :headers="uploadHead"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :file-list="fileList"
                 :auto-upload="false"
                 :limit="1"
                 :multiple="true"
                 accept=".xlsx">
        <el-button slot="trigger"
                   size="mini"
                   type="primary">选取文件</el-button>
        <div slot="tip"
             class="el-upload__tip">支持.xlsx格式的文件</div>
        <el-button style="margin-left: 10px;"
                   size="mini"
                   type="success"
                   @click="submitUpload">上传到服务器</el-button>
      </el-upload>
    </el-aside>
    <el-aside>
      <br>
      <br>
      <el-button type="primary"
                 :loading="isloading"
                 size="mini"
                 @click="analysis">解析</el-button>
      <!-- <h1>解析进度</h1>
      <el-progress class="aprogress"
                   :percentage=this.processNum></el-progress> -->
    </el-aside>
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
      uploadAction: '',
      processNum: 0,
      headers: {},
      uploadHead: {},
      fileList: [],
      isloading: false
    }
  },
  created () {
    console.log('这是create 函数')
    if (sessionStorage.getItem('pname')) {
      this.setpname_prom(sessionStorage.getItem('pname'))
    }
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('pname', sessionStorage.getItem('pname'))
    })
    this.headers = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'worktable' }
    this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'worktable', 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
    this.uploadAction = this.user.httppath + '/api/Worktable/Upload'
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    analysis () {
      console.log(' analysis 测试进度条比变化')
      if (this.prom.prom_pname === 'default') {
        this.$notify({
          title: '警告',
          message: '没有权限对公有工程进行数据入库',
          type: 'warning'
        })
        return
      }
      this.dbInput()
      // var id = setInterval(() => {
      //   console.log('2s 后执行')
      //   this.i = this.processbar()
      //   console.log(this.processNum)
      //   //  console.log('定时器响应中')
      //   if (this.processNum === 100) {
      //     clearInterval(id)
      //     console.log('定时器关闭')
      //   }
      // }, 2000)
    },
    send () {
      console.log('这是send 函数')
    },
    processbar () {
      console.log('函数 processbar 测试进度条某一刻的值')
      this.$http.post(this.user.httppath + '/api/Worktable/TableName',
        {},
        { headers: this.headers }
      ).then((response) => {
        console.log('函数 processbar 响应')
        console.log(response)
        return response
      }).catch((error) => {
        console.log('函数 processbar 响应 失败')
        console.log('error')
        console.log(error)
      })
    },
    dbInput () {
      this.isloading = true
      this.$http.post(this.user.httppath + '/api/Worktable/Parse',
        {},
        { headers: this.headers }
      ).then((response) => {
        this.isloading = false
        this.$notify({
          title: '成功',
          message: '解析成功',
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
      console.log('这是函数 submitUpload')
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
      console.log(file)
      console.log(fileList)
    },
    handlePreview (file) {
      console.log('这是函数 handlePreview')
      console.log(file)
    }
  }
}
</script>
<style>
.elmro {
  text-align: center;
}
</style>