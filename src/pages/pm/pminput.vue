<template>
  <el-container>
    <el-main>
      <br>
      <br>
      <el-upload class="elmro"
                 ref="upload"
                 :action="uploadAction"
                 :headers="getuploadHead"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :file-list="fileList"
                 :auto-upload="false"
                 :limit="1000"
                 :multiple="true"
                 accept=".xml, .zip">
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
      <hr />
      <el-button @click="analysis"
                 size="mini"
                 :loading="isloading"
                 style="width:80px; margin-left:2px"
                 type="primary">解析</el-button>
    </el-main>
  </el-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user,
      pm: (state) => state.pm
    }),
    gethead () {
      var head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': this.getpmtype }
      return head
    },
    getuploadHead () {
      var uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': this.getpmtype, 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
      return uploadHead
    },
    getpmtype () {
      var thisvalue = ''
      // 测试
      console.log(this.pm.pm_typeNow)
      if (this.pm.pm_typeNow === '3g rbs') {
        thisvalue = 'PM_3G_RBS'
      } else if (this.pm.pm_typeNow === '3g rnc') {
        thisvalue = 'PM_3G_RNC'
      } else if (this.pm.pm_typeNow === '4g') {
        thisvalue = 'PM_4G'
      } else {
        thisvalue = 'PM_NBIoT'
      }
      return thisvalue
    }
  },
  data () {
    return {
      processNum: 70,
      // head: {},
      // uploadHead: {},
      fileList: [],
      uploadAction: '',
      isloading: false
    }
  },
  created: function () {
    if (sessionStorage.getItem('pname')) {
      this.setpname_prom(sessionStorage.getItem('pname'))
    }
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('pname', sessionStorage.getItem('pname'))
    })
    // this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': this.getpmtype }
    // this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': this.getpmtype, 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
    this.uploadAction = this.user.httppath + '/api/Pm/Upload'
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    analysis () {
      console.log(this.getpmtype)
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
      this.isloading = true
      // this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': this.getpmtype }
      // console.log()
      this.$http.post(this.user.httppath + '/api/Pm/Parse',
        {},
        { headers: this.gethead }
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
        // this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': this.getpmtype, 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
        // console.log(this.uploadHead)
        // console.log(this.uploadAction)
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