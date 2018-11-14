<template>
  <el-container>
    <el-aside width="500px">
      <br>
      <br>
      <el-upload class="elmro"
                 ref="upload"
                 action="http://192.168.0.237:2860/api/Expasion/Upload"
                 :headers="headers"
                 :on-preview="handlePreview"
                 :on-remove="handleRemove"
                 :on-success="success"
                 :file-list="fileList"
                 :auto-upload="false"
                 :limit="1"
                 :multiple="true"
                 accept=".xlsx">
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
      <el-button type="primary"
                 size="mini"
                 @click="addrow">添加</el-button>
      <el-table border
                :highlight-current-row="true"
                :data="tables"
                style="width: 500px">
        <el-table-column :label="key"
                         v-for="(date, key) in tables[0]"
                         :key="key"
                         :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{scope.row[key]}}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
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
    </el-aside>
    <el-main>
      <br>
      <br>
      <el-form v-show="isShow"
               ref="form"
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
      </el-form>
      <br>
      <el-button type="primary"
                 :loading="isloading"
                 size="mini"
                 @click="analysis">解析</el-button>
      <el-table width="400px"
                @row-click="handleRowChange"
                :highlight-current-row="true"
                :data="resultTableName">
        <el-table-column :show-overflow-tooltip="true"
                         prop="tableName"
                         label="表名称">
        </el-table-column>
      </el-table>
      <el-table width="400px"
                :highlight-current-row="true"
                :data="oneTable">
        <el-table-column :label="key"
                         v-for="(date, key) in oneTable[0]"
                         :key="key"
                         :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{scope.row[key]}}
          </template>
        </el-table-column>
      </el-table>
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
      headers: {},
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
      isShow: false,
      fileList: [],
      selectrow: -1,
      tables: [],
      isloading: false,
      resultTable: {},
      resultTableName: [{ 'tableName': '扩容结果' }, { 'tableName': '扩容错误信息' }, { 'tableName': '错误信息' }],
      oneTable: []
    }
  },
  created () {
    console.log('这是create 函数')
    this.headers = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'expansion' }
    this.uploadAction = this.user.httppath + '/api/Expasion/Upload'
    console.log(this.headers)
    this.$http.post(this.user.httppath + '/api/Expasion/GetInTemplate',
      {},
      { headers: this.headers }
    ).then((response) => {
      console.log(response)
      this.tables = response
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
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
      // console.log(index, row)
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
    handleRowChange (row) {
      console.log(row)
      if (this.resultTable === '') {
        return
      }
      if (row['tableName'] === '扩容结果') {
        this.oneTable = this.resultTable['扩容结果']
      } else if (row['tableName'] === '扩容错误信息') {
        this.oneTable = this.resultTable['扩容错误信息']
      } else {
        this.oneTable = this.resultTable['错误信息']
      }
      console.log(this.oneTable)
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
      // this.submitUpload ()
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
      console.log('这是函数 handleRemove')
      console.log(file)
      console.log(fileList)
    },
    handlePreview (file) {
      console.log('这是函数 handlePreview')
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
    }
  }
}
</script>
<style>
.elmro {
  text-align: center;
}
</style>