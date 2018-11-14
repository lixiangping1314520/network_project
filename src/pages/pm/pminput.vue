<template>
  <el-container>
    <el-aside width="500px">
      <br>
      <br>
      <el-upload class="elmro"
                 ref="upload"
                 action="uploadAction"
                 :on-preview="handlePreview"
                 :data="head"
                 :on-remove="handleRemove"
                 :file-list="fileList"
                 :auto-upload="false"
                 :limit="1000"
                 :multiple="true">
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
    </el-aside>
    <el-aside>
      <br>
      <br>
      <button @click="analysis">解析</button>
      <h1>解析进度</h1>
      <el-progress class="aprogress"
                   :percentage=this.processNum></el-progress>
    </el-aside>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user
    })
  },
  data () {
    return {
      processNum: 70,
      head: {},
      fileList: [],
      uploadAction: ''
    }
  },
  created: function () {
    this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'pm' }
    this.uploadAction = this.user.httppath + 'api/Pm/Upload'
  },
  methods: {
    analysis2 () {
      var id = setInterval(() => {
        var a = 100
        console.log('定时器响应中')
        if (a === 100) {
          clearInterval(id)
          console.log('定时器关闭')
        }
      }, 4000)
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
      // var heads = {headers: {'projectname': this.prom.prom_pname, 'username': this.user.user.username, 'filetype': 'mr'}}
      // 等待函数测试
      // setTimeout(() => {
      //   // console.log('函数 settime out')
      // }, 5000)

      // this.dbInput(heads)
      var a = 0
      var id = setInterval(() => {
        // var a = this.processbar(heads)
        console.log('2s 后执行')
        a = a + 20
        this.processNum = a
        console.log(a)
        //  console.log('定时器响应中')
        if (a === 100) {
          clearInterval(id)
          console.log('定时器关闭')
        }
      }, 2000)
    },
    send () {
      console.log('这是send 函数')
    },
    processbar (heads) {
      console.log('函数 processbar')
      this.$http.post(this.user.httppath + '/api/Mr/MrAnalysisProcess',
        {},
        heads
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
    dbInput (heads) {
      this.$http.post(this.user.httppath + '/api/Mr/MrAnalysisProcess',
        {},
        heads
      ).then((response) => {
        console.log('函数 dbInput success')
        console.log(response)
      }).catch((error) => {
        console.log('函数 dbInput error')
        console.log(error)
      })
    },
    myUpload () {
      console.log('这是函数 myupload')
      // this.$refs.upload.submit()
      // this.$http.post('http://192.168.0.134:2861/api/Mr/Upload',
      //   this.fileList
      // ).then((response) => {
      //   // this.data_list = JSON.parse(response)
      //   // this.total = this.data_list.length
      //   console.log(response)
      // }).catch((error) => {
      //   console.log(error)
      // })
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