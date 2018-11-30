<template>
  <el-container>
    <el-aside width="500px">
      <br>
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
                 accept=".xml, .zip">
        <el-button slot="trigger"
                   size="small"
                   type="primary">选取文件</el-button>
        <div slot="tip"
             class="el-upload__tip">支持zip,xml格式的文件</div>
        <el-button style="margin-left: 10px;"
                   size="small"
                   type="success"
                   @click="submitUpload">上传到服务器</el-button>
        <!-- <el-button slot="trigger"
                   size="small"
                   type="primary"选取文件</el-button>
        <el-button style="margin-left: 10px;"
                   size="small"
                   type="success"
                   @click="submitUpload">上传到服务器</el-button> -->
      </el-upload>

    </el-aside>
    <el-aside>
      <br>
      <br>
      <el-button @click="analysis"
                 size="mini"
                 :loading="isloading"
                 type="primary">解析</el-button>
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
      user: (state) => state.user,
      pm: (state) => state.pm
    }),
    getpmtype () {
      var thisvalue = ''
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
  // ...mapGetters(['getpmtype']),
  data () {
    return {
      processNum: 70,
      head: {},
      uploadHead: {},
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
    console.log(this.getpmtype)
    this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': this.getpmtype }
    this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': this.getpmtype, 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
    this.uploadAction = this.user.httppath + '/api/Pm/Upload'
    console.log(this.head)
    console.log(this.uploadHead)
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    // analysis2 () {
    //   var id = setInterval(() => {
    //     var a = 100
    //     console.log('定时器响应中')
    //     if (a === 100) {
    //       clearInterval(id)
    //       console.log('定时器关闭')
    //     }
    //   }, 4000)
    // },
    analysis () {
      console.log(this.getpmtype)
      if (this.prom.prom_pname === 'default') {
        this.$notify({
          title: '警告',
          message: '没有权限对公有工程进行数据入库',
          type: 'warning'
        })
      }
      this.dbInput()
    },
    send () {
      console.log('这是send 函数')
    },
    processbar () {
      console.log('函数 processbar')
      this.$http.post(this.user.httppath + '/api/api/Pm/Parse',
        {},
        { headers: this.head }
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
      this.$http.post(this.user.httppath + '/api/Pm/Parse',
        {},
        { headers: this.head }
      ).then((response) => {
        this.isloading = false
        this.$notify({
          title: '成功',
          message: '解析完成',
          type: 'success'
        })
        console.log('函数 dbInput success')
        console.log(response)
      }).catch((error) => {
        this.isloading = false
        this.$notify({
          title: '警告',
          message: error,
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