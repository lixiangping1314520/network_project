<template>
  <el-container>
    <el-main>
      <el-upload class="elmro"
                 ref="upload"
                 :action="uploaadAction"
                 :headers="uploadHead"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :file-list="fileList"
                 :auto-upload="false"
                 :limit="1000"
                 :multiple="true"
                 accept=".zip, .xml">
        <el-button slot="trigger"
                   size="mini"
                   type="primary">选取文件</el-button>
        <div slot="tip"
             class="el-upload__tip">支持zip,xml格式的文件</div>
        <el-button style="margin-left: 10px;"
                   size="mini"
                   type="success"
                   @click="submitUpload">上传到服务器</el-button>
      </el-upload>
      <br>
      <hr style="border-top: 1px solid lightgray"/>
      <el-button type="primary"
                 :loading="isloading"
                 size="mini"
                 style="width:80px; margin-left:2px"
                 @click="analysis">解析</el-button>
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
      uploaadAction: '',
      processNum: 0,
      head: {},
      uploadHead: {},
      fileList: [],
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
    console.log('这是create 函数')
    this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'mr' }
    this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'mr', 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
    this.uploaadAction = this.user.httppath + '/api/Mr/Upload'
    console.log(this.uploaadAction)
    console.log(this.head)
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    analysis () {
      // console.log(' analysis 测试进度条比变化')
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
    send () {
      console.log('这是send 函数')
    },
    dbInput () {
      console.log('dbInput')
      this.isloading = true
      this.$http.post(this.user.httppath + '/api/Mr/Parse',
        {},
        { headers: this.head }
      ).then((response) => {
        this.isloading = false
        this.$notify({
          title: '成功',
          message: '解析成功',
          type: 'success'
        })
        console.log('函数 dbInput success')
        console.log(response)
      }).catch((error) => {
        this.isloading = false
        this.$notify({
          title: '警告',
          message: '解析失败' + error,
          type: 'warning'
        })
        console.log('函数 dbInput error')
        console.log(error)
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
        console.log(this.head)
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
.el-button {
  margin: 0 auto;
}
</style>