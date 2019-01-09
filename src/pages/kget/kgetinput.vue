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
                 :limit="1"
                 :multiple="true"
                 accept=".log">
        <el-button slot="trigger"
                   size="mini"
                   type="primary">选取文件</el-button>
        <div slot="tip"
             class="el-upload__tip">支持.log格式的文件</div>
        <el-button style="margin-left: 10px;"
                   size="mini"
                   type="success"
                   @click="submitUpload">上传到服务器</el-button>
      </el-upload>  
      <br>
      <hr/>
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
      user: (state) => state.user
    })
  },
  data () {
    return {
      uploadAction: '',
      processNum: 0,
      head: {},
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
    this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'kget' }
    this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'kget', 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
    this.uploadAction = this.user.httppath + '/api/Kget/Upload'
    console.log(this.head)
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
    },
    send () {
      console.log('这是send 函数')
    },
    processbar () {
      console.log('函数 processbar 测试进度条某一刻的值')
      this.$http.post(this.user.httppath + '/api/Mr/MrAnalysisProcess',
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
      console.log('dbInput')
      this.isloading = true
      this.$http.post(this.user.httppath + '/api/Kget/KgetParse',
        {},
        { headers: this.head }
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
    myUpload () {
      console.log('这是函数 myupload')
      console.log(this.fileList)
      this.$http.post(this.user.httppath + '/api/Mr/Upload',
        this.fileList
      ).then((response) => {
      }).catch((error) => {
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
.svg-icon {
  width: 40px;
  height: 40px;
  stroke: #343640;
  stroke-width: 2;
  stroke-linecap: round;
}
.svg-icon .path {
  fill: none;
}
.m-loading {
  background: none;
  animation: loading-rotate 0.8s linear infinite;
}
@keyframes loading-rotate {
  to {
    transform: rotate(1turn);
  }
}
.progress {
  width: 100%;
  position: relative;
  height: 400px;
}
.init-box {
  position: absolute;
}
.init-box .init-loading {
  width: 128px;
  height: 128px;
}
.init-box .init-tips {
  color: #8b90a0;
}
.elmro {
  text-align: center;
}
</style>