<template>
  <el-container>
    <el-main>
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
                 accept=".csv,">
        <el-button slot="trigger"
                   size="mini"
                   type="primary">选取核查表</el-button>

        <div slot="tip"
             class="el-upload__tip">支持.csv格式的文件</div>
        <el-button style="margin-left: 10px;"
                   size="mini"
                   type="success"
                   @click="submitUpload">上传到服务器</el-button>
        <a @click="down">模板下载 </a>
      </el-upload>
      <br>
      <hr style="border-top: 1px solid lightgray"/> 
      <el-button type="primary"
                 :loading="isloading"
                 size="mini"
                 style="width:80px; margin-left:2px"
                 @click="analysis">解析</el-button>
      <v-exportTable :tableData="oneTable"></v-exportTable>
      <el-form :inline="true"
               class="demo-form-inline"
               style="margin-top: 10px">
        <el-form-item style="margin-bottom: 10px">
          <el-select v-model="tableName"
                     size="mini"
                     placeholder="表名称"
                     @change="changeTableName"
                     style="width:200px">
            <el-option v-for="item in resultTableName"
                       :key="item.tableName"
                       :label="item.tableName"
                       :value="item.tableName">{{item.tableName}}</el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <v-pageTable :tableData="oneTable">
      </v-pageTable>
    </el-main>
  </el-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import exportTable from '../../basic/exportTable'
import fileDownload from '../../basic/fileDownload.js'
import pageTable from '../../basic/pageTable.vue'
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
      headers: {},
      tables: [],
      fileList: [], // 上传的核查表
      resultTable: {}, // 获取的dataset
      resultTableName: [{ 'tableName': '错误信息表' }, { 'tableName': '核查结果表' }],
      oneTable: [], // 结果表
      isloading: false,
      tableName: ''
    }
  },
  created () {
    console.log('bulkcm crate 函数')
    if (sessionStorage.getItem('pname')) {
      this.setpname_prom(sessionStorage.getItem('pname'))
    }
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('pname', sessionStorage.getItem('pname'))
    })
    this.headers = { headers: { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'bulkcm' } }
    this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'bulkcm', 'Authorization': 'bearer ' + sessionStorage.getItem('token') }
    this.uploadAction = this.user.httppath + '/api/Bulkcm/CheckUpload'
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    down () {
      var url = this.user.httppath + '/api/FileDown/Download'
      var head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'bulkcm' }
      fileDownload(url, head)
    },
    handleRemove (file, fileList) {
      console.log('这是函数 handleRemove')
      console.log(file)
      console.log(fileList)
    },
    handlePreview (file) {
      console.log('这是函数 handlePreview')
      console.log(file)
    },
    analysis () {
      console.log('这是点击函数')
      this.isloading = true
      this.$http.post(this.user.httppath + '/api/Bulkcm/ParamCheck',
        {},
        this.headers
      ).then((response) => {
        if (response === '请上传核查文件') {
          this.isloading = false
          this.$notify({
            title: '警告',
            message: '请上传核查文件',
            type: 'warning'
          })
        } else {
          this.resultTable = response
          this.isloading = false
          this.$notify({
            title: '成功',
            message: '解析完成',
            type: 'success'
          })
        }
      }).catch((error) => {
        this.$notify({
          title: '警告',
          message: error,
          type: 'warning'
        })
      })
    },
    submitUpload () {
      this.$refs.upload.submit()
    },
    changeTableName () {
      if (Object.keys(this.resultTable).length !== 0) {
        if (this.tableName === '错误信息表') {
          this.oneTable = this.resultTable['错误信息表']
        } else {
          this.oneTable = this.resultTable['核查结果表']
        }
      }
    }
  }
}
</script>
