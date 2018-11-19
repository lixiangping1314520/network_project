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
                 :limit="1"
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
    </el-aside>
    <el-aside>
      <br>
      <br>
      <button @click="analysis">解析</button>
      <h1>解析进度</h1>
      <el-progress class="aprogress"
                   :percentage=this.processNum></el-progress>
    </el-aside>
    <!-- <br>
    <div class="progress">
                    <div class="init-box">
	        <div>
	          <svg viewBox="0 0 50 50" class="svg-icon m-loading init-loading">
	            <circle cx="25" cy="25" r="20" fill="none" stroke="#F2F2F2" class="path"></circle>
	            <circle cx="25" cy="25" r="20" fill="none" stroke="#24A2FF" stroke-dasharray="60,150" class="path"></circle>
	          </svg>
	        </div>
	        <p class="init-tips">正在解析，请耐心等待...</p>
	    </div>
	  </div> -->
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
      fileList: []
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
      // var id = setInterval(() => {
      //   console.log('2s 后执行')
      //   this.i = this.processbar()
      //   console.log(this.processNum)
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
      this.$http.post(this.user.httppath + '/api/Kget/KgetParse',
        {},
        { headers: this.head }
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