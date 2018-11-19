<template>
  <el-container>
    <el-aside width="500px">
      <el-table :highlight-current-row="true"
                :data="showTables"
                style="width: 500px">
        <!-- <el-table-column :label="key" v-for="(date, key) in tables[0]" :key="key">
        <template slot-scope="scope">
          {{scope.row[key]}}
        </template>
      </el-table-column> -->
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true"
                         prop="MOC_Name"
                         label="MOC_Name">
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true"
                         prop="Param_Name"
                         label="Param_Name">
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true"
                         prop="Para_Description"
                         label="Para_Description">
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true"
                         prop="Baseline_Value"
                         label="Baseline_Value">
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

      <div class="pagination-wrapper">
        <el-pagination layout="prev, pager, next"
                       :total="pageNum"
                       @current-change="handleCurrentChange">
        </el-pagination>
      </div>

    </el-aside>
    <el-main>
      <el-button type="primary"
                 size="mini"
                 @click="addrow">新增</el-button>
      <el-form v-show="false"
               ref="form"
               :model="form"
               label-width="110px">
        <el-form-item label="MOC_Name:">
          <el-input v-model="form.MOC_Name"></el-input>
        </el-form-item>
        <el-form-item label="Param_Name:">
          <el-input v-model="form.Param_Name"></el-input>
        </el-form-item>
        <el-form-item label="Para_Description:">
          <el-input v-model="form.Para_Description"></el-input>
        </el-form-item>
        <el-form-item label="Baseline_Value:">
          <el-input v-model="form.Baseline_Value"></el-input>
        </el-form-item>
        <el-button type="primary"
                   @click="onSubmit(selectrow)">确认</el-button>
      </el-form>
      <el-button type="primary"
                 :loading="isloading"
                 size="mini"
                 @click="save">解析</el-button>
      <export-table :tableData="oneTable"></export-table>
      <!-- <el-table  @row-click="handleRowChange" :highlight-current-row="true" :data="resultTableName">         
      <el-table-column 
        :show-overflow-tooltip="true"
        prop="tableName"
        label="表名称">
      </el-table-column>
    </el-table> -->

      <el-form :inline="true"
               class="demo-form-inline"
               style="margin-top: 10px">
        <el-form-item style="margin-bottom: 10px">
          <el-select v-model="tableName"
                     placeholder="表名称"
                     @change="changeTableName">
            <el-option v-for="item in resultTableName"
                       :key="item.tableName"
                       :label="item.tableName"
                       :value="item.tableName">{{item.tableName}}</el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-table :highlight-current-row="true"
                :data="oneTable_1">
        <el-table-column :label="key"
                         v-for="(date, key) in oneTable_1[0]"
                         :key="key"
                         :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{scope.row[key]}}
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-wrapper">
        <el-pagination layout="prev, pager, next"
                       :pager-count="5"
                       :total="pageNum_1"
                       @current-change_1="handleCurrentChange">
        </el-pagination>
      </div>

    </el-main>
  </el-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import exportTable from '../../basic/exportTable'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user
    })
  },
  components: {
    exportTable
  },
  data () {
    return {
      headers: {},
      tables: [],
      pageNum: 0,
      showTables: [],

      pageNum_1: 0,
      oneTable_1: [],
      form: {
        'MOC_Name': '',
        'Param_Name': '',
        'Para_Description': '',
        'Baseline_Value': ''
      },
      selectrow: -1,
      resultTable: {},
      resultTableName: [{ tableName: 'CheckResult' }, { tableName: 'ErrorResult' }],
      oneTable: [],
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
    this.headers = { headers: { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'kget' } }
    this.$http.post(this.user.httppath + '/api/Kget/CheckCfg',
      {},
      this.headers
    ).then((response) => {
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
      let pageSize = 10
      this.showTables = this.tables.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize - 1)
    },
    initPageNum () {
      this.pageNum = this.tables.length
    },
    handleCurrentChange_1 (pageIndex) {
      // pageIndex = pageIndex || 1
      let pageSize = 10
      this.oneTable_1 = this.oneTable.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize - 1)
    },
    initPageNum_1 () {
      this.pageNum_1 = this.oneTable.length

      console.log(this.pageNum_1)
    },

    changeTableName () {
      if (this.tableName === 'CheckResult') {
        this.oneTable = this.resultTable['CheckResult']
      } else {
        this.oneTable = this.resultTable['ErrorResult']
      }
      // 刚打开页面时加载前10项、且自动生成分页数量
      this.handleCurrentChange_1(1)
      this.initPageNum_1()
    },
    handleEdit (index, row) {
      this.selectrow = index
      this.form['MOC_Name'] = this.tables[index]['MOC_Name']
      this.form['Param_Name'] = this.tables[index]['Param_Name']
      this.form['Para_Description'] = this.tables[index]['Para_Description']
      this.form['Baseline_Value'] = this.tables[index]['Baseline_Value']
      console.log(index, row)
    },
    handleDelete (index, row) {
      this.tables.splice(index, 1)
      console.log(index, row)
    },
    addrow () {
      this.selectrow = -1
      this.form['MOC_Name'] = ''
      this.form['Param_Name'] = ''
      this.form['Para_Description'] = ''
      this.form['Baseline_Value'] = ''
    },
    onSubmit (row) {
      if (row !== -1) {
        console.log(this.tables[row])
        this.tables[row]['MOC_Name'] = this.form['MOC_Name']
        this.tables[row]['Param_Name'] = this.form['Param_Name']
        this.tables[row]['Para_Description'] = this.form['Para_Description']
        this.tables[row]['Baseline_Value'] = this.form['Baseline_Value']
      } else {
        this.tables.push(this.form)
      }
    },
    save () {
      this.isloading = true
      this.$http.post(this.user.httppath + '/api/Kget/ParamCheck',
        this.tables,
        this.headers
      ).then((response) => {
        this.resultTable = response



        console.log(this.resultTable)
        this.isloading = false
        this.$notify({
          title: '成功',
          message: '解析完成: ',
          type: 'success'
        })
      }).catch((error) => {
        console.log(error)
      })
    }
    // handleRowChange (row) {
    //   console.log(row)
    //   console.log(this.resultTable)
    //   if (row['tableName'] === 'CheckResult') {
    //     this.oneTable = this.resultTable['CheckResult']
    //   } else {
    //     this.oneTable = this.resultTable['ErrorResult']
    //   }
    //   console.log(this.oneTable)
    // }
  }
}
</script>
