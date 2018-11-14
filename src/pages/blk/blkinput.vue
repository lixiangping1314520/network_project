<template>
  <el-container>
    <el-aside width="500px">
      <br>
      <br>
      <el-upload class="elmro"
                 ref="upload"
                 action="uploadAction"
                 :headers="head"
                 :on-preview="handlePreview"
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
      <div class="table-wrapper">
        <el-table id="du"
                ref="multipleTable"
                :data="currentPageData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column type="selection"
                           width="30">
          </el-table-column>
          </el-table-column>
          <el-table-column prop="title"
                           label="表名"
                           width="470"
                           :show-overflow-tooltip="true">
            <template slot-scope="scope">{{ scope.row.title }}</template>
          </el-table-column>
        </el-table>
      </div>

      <div class="pagination-wrapper">
        <el-pagination
          layout="prev, pager, next"
          :total="pageNum"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
      
    </el-aside>
    <el-main>
      <br>
      <br>
      <el-button type="primary"
                 :loading="isloading"
                 @click="analysis">解析</el-button>
      <h1>解析进度</h1>
      <el-progress class="aprogress"
                   :percentage=this.processNum></el-progress>
    </el-main>
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
      uploadAction: '',
      processNum: 0,
      head: {},
      needTabel: [],
      table: [],
      multipleSelection: [],
      fileList: [],
      isloading: false,
      currentPageData: [],
      pageNum: 0
    }
  },
  destroyed () {
    this.needTabel = []
  },
  created () {
    console.log('这是create blkinput 函数')
    console.log('created first')
    this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'bulkcm' }
    this.uploadAction = this.user.httppath + '/api/Bulkcm/Upload'
    var heads = { headers: this.head }
    this.$http.post(this.user.httppath + '/api/Bulkcm/GetTables',
      {},
      heads
    ).then((response) => {
      this.needTabel = response
      // 刚打开页面时加载前10项、且自动生成分页数量
      this.handleCurrentChange(1)
      this.initPageNum()
      for (let i = 0; i < response.length; i++) {
        if (response[i].isOk === 'True') {
          this.table.push(this.needTabel[i])
        }
      }
      this.toggleSelection(this.table)
    }).catch((error) => {
      console.log(error)
    })
  },
  mounted () {
    // this.toggleSelection(this.table)
    setTimeout(() => {
      this.toggleSelection(this.table)
    }, 1000)
  },
  methods: {
    // 点击跳转页面，显示对应的数据
    handleCurrentChange (pageIndex) {
      // pageIndex = pageIndex || 1
      let pageSize = 12
      this.currentPageData = this.needTabel.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize - 1)
    },
    initPageNum () {
      this.pageNum = this.needTabel.length
    },
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
      this.isloading = true
      // NProgress.start()
      var tables = []
      for (var key in this.multipleSelection) {
        tables.push(this.multipleSelection[key].title)
        console.log(this.multipleSelection[key].title)
      }
      // JSON.parse(tables)
      // JSON.stringify(tables)
      console.log(this.tables)
      this.$http.post(this.user.httppath + '/api/Bulkcm/BulkParse',
        { tableName: tables },
        { headers: this.head }
      ).then((response) => {
        console.log('函数 dbInput success')
        console.log(response)
        this.isloading = false
        if (response === isNaN) {

        }
      }).catch((error) => {
        console.log('函数 dbInput error')
        console.log(error)
      })
      // NProgress.done()
    },
    myUpload () {
      console.log('这是函数 myupload')
      // this.submitUpload ()
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
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style>
.elmro {
  text-align: center;
}
.pagination-wrapper{
  float: right;
}
</style>