<template>
  <div style="padding-left:10px;">
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
    <hr/>
    <el-button type="primary"
               size="mini"
               style="width:80px"
               @click="paramPeizhi">参数配置</el-button>
    <el-button type="primary"
               :loading="isloading"
               size="mini"
               style="width:80px; margin-left:2px"
               @click="analysis">解析</el-button>
    <v-exportTable style="margin-left:2px"
                   :tableData="oneTable"></v-exportTable>
    <div v-if="isShow_Par">
      <br>
      <el-button type="primary"
                 size="mini"
                 @click="addrow">添加</el-button>
      <el-table border
                :highlight-current-row="true"
                :data="tablesData">
        <el-table-column :label="key"
                         v-for="(date, key) in tablesData[0]"
                         :key="key"
                         :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{scope.row[key]}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       fixed='right'
                       @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       type="danger"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-wrapper">
        <el-pagination layout="prev, pager, next"
                       :total="pageNum"
                       :page-size="6"
                       @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>
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
    <v-pageTable :tableData="oneTable"> </v-pageTable>
    <br>
    <br>
    <el-dialog title="参数设置"
               :visible.sync="isShow"
               :close-on-click-modal="false"
               :append-to-body="atb_format">
      <el-form ref="form"
               :model="form"
               label-width="110px">
        <el-form-item label="等待扩容小区:">
          <el-input v-model="form.等待扩容小区"></el-input>
        </el-form-item>
        <el-form-item label="站号:">
          <el-input v-model="form.站号"></el-input>
        </el-form-item>
        <el-form-item label="站名:">
          <el-input v-model="form.站名"></el-input>
        </el-form-item>
        <el-form-item label="分公司:">
          <el-input v-model="form.分公司"></el-input>
        </el-form-item>
        <el-form-item label="扩容前配置:">
          <el-input v-model="form.扩容前配置"></el-input>
        </el-form-item>
        <el-form-item label="双载波扩容方案:">
          <el-input v-model="form.双载波扩容方案"></el-input>
        </el-form-item>
        <el-form-item label="扩容扇区数:">
          <el-input v-model="form.扩容扇区数"></el-input>
        </el-form-item>
        <el-form-item label="扩容后配置:">
          <el-input v-model="form.扩容后配置"></el-input>
        </el-form-item>
        <el-form-item label="扩容小区:">
          <el-input v-model="form.扩容后配置"></el-input>
        </el-form-item>
        <el-button type="primary"
                   size="mini"
                   @click="onSubmit(selectrow)">确认</el-button>
        <el-button type="primary"
                   size="mini"
                   @click="cancel()">取消</el-button>
      </el-form>
    </el-dialog>
    <br>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import exportTable from '../../basic/exportTable'
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
      uploadAction: '',
      atb_format: false,
      processNum: 0,
      headers: {},
      uploadHead: {},
      form: {
        '等待扩容小区': '',
        '站号': '',
        '站名': '',
        '分公司': '',
        '扩容前配置': '',
        '双载波扩容方案': '',
        '扩容扇区数': '',
        '扩容后配置': '',
        '扩容小区': ''
      },
      isShow_Par: false,
      isShow: false,
      fileList: [],
      selectrow: -1,
      tables: [], // 参数配置表
      pageNum: 0,
      isloading: false,
      resultTable: {},
      resultTableName: [{ 'tableName': '扩容结果' }, { 'tableName': '扩容错误信息' }, { 'tableName': '错误信息' }],
      oneTable: [],
      tableName: '',
      oneTableData: [],
      tablesData: []
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
    this.headers = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'expansion' }
    this.uploadHead = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'expansion', 'Authorization': 'bearer ' + sessionStorage.getItem('token') }

    this.uploadAction = this.user.httppath + '/api/Expasion/Upload'
    console.log('这是uploadAction')
    console.log(this.uploadAction)
    console.log(JSON.stringify(this.headers))
    this.$http.post(this.user.httppath + '/api/Expasion/GetInTemplate',
      {},
      { headers: this.headers }
    ).then((response) => {
      console.log(response)
      this.tables = response
      // 刚打开页面时加载前10项、且自动生成分页数量
      this.handleCurrentChange(1)
      this.initPageNum()
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    // 点击跳转页面，显示对应的数据
    handleCurrentChange (pageIndex) {
      // pageIndex = pageIndex || 1
      let pageSize = 6
      this.tablesData = this.tables.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize)
    },
    initPageNum () {
      this.pageNum = this.tables.length
    },
    initPageNum_1 () {
      this.pageNum_1 = this.oneTable.length
    },
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
    handleEdit (index, row) {
      this.selectrow = index
      this.form['等待扩容小区'] = this.tables[index]['等待扩容小区']
      this.form['站号'] = this.tables[index]['站号']
      this.form['站名'] = this.tables[index]['站名']
      this.form['分公司'] = this.tables[index]['分公司']
      this.form['扩容前配置'] = this.tables[index]['扩容前配置']
      this.form['双载波扩容方案'] = this.tables[index]['双载波扩容方案']
      this.form['扩容扇区数'] = this.tables[index]['扩容扇区数']
      this.form['扩容后配置'] = this.tables[index]['扩容后配置']
      this.form['扩容小区'] = this.tables[index]['扩容小区']
      this.isShow = !this.isShow
    },
    paramPeizhi () {
      this.isShow_Par = !this.isShow_Par
    },
    addrow () {
      this.selectrow = -1
      this.form['等待扩容小区'] = ''
      this.form['站号'] = ''
      this.form['站名'] = ''
      this.form['分公司'] = ''
      this.form['扩容前配置'] = ''
      this.form['双载波扩容方案'] = ''
      this.form['扩容扇区数'] = ''
      this.form['扩容后配置'] = ''
      this.form['扩容小区'] = ''
      this.isShow = !this.isShow
    },
    handleDelete (index, row) {
      this.tables.splice(index, 1)
      console.log(index, row)
    },
    changeTableName () {
      console.log(this.tableName)
      if (this.resultTable === '') {
        return
      }
      if (this.tableName === '扩容结果') {
        this.oneTable = this.resultTable['扩容结果']
      } else if (this.tableName === '扩容错误信息') {
        this.oneTable = this.resultTable['扩容错误信息']
      } else {
        this.oneTable = this.resultTable['错误信息']
      }
      // 刚打开页面时加载前10项、且自动生成分页数量
      // this.handleCurrentChange_1(1)
      // this.initPageNum_1()
    },
    dbInput () {
      console.log('dbInput')
      this.isloading = true
      this.$http.post(this.user.httppath + '/api/Expasion/RndExpansion',
        this.tables,
        { headers: this.headers }
      ).then((response) => {
        console.log('函数 dbInput success')
        console.log(response)
        this.resultTable = response
        this.isloading = false
      }).catch((error) => {
        console.log('函数 dbInput error')
        console.log(error)
        this.isloading = false
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
    success (response, file, fileList) {
      console.log(response)
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
      console.log(file)
      console.log(fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    onSubmit (row) {
      if (row !== -1) {
        console.log(this.tables[row])
        this.tables[row]['等待扩容小区'] = this.form['等待扩容小区']
        this.tables[row]['站号'] = this.form['站号']
        this.tables[row]['站名'] = this.form['站名']
        this.tables[row]['分公司'] = this.form['分公司']
        this.tables[row]['扩容前配置'] = this.form['扩容前配置']
        this.tables[row]['双载波扩容方案'] = this.form['双载波扩容方案']
        this.tables[row]['扩容扇区数'] = this.form['扩容扇区数']
        this.tables[row]['扩容后配置'] = this.form['扩容后配置']
        this.tables[row]['扩容小区'] = this.form['扩容小区']
      } else {
        this.tables.push(this.form)
      }
      this.isShow = !this.isShow
    },
    cancel () {
      this.form['CATEGORY'] = ''
      this.form['CELLTYPE2'] = ''
      this.form['FILTER'] = ''
      this.form['MONAME'] = ''
      this.form['MOVALUE'] = ''
      this.form['PARANAME'] = ''
      this.form['RECOMMENDEDVALUE'] = ''
      this.form['VERSION'] = ''
      this.isShow = false
    }
  }
}
</script>
<style>
.elmro {
  text-align: center;
}
</style>