<template>
  <el-container>
    <el-aside width="500px">
      <el-table :highlight-current-row="true"
                :data="currentPageData_1"
                style="width: 100%">
        <el-table-column :label="key"
                         v-for="(date, key) in currentPageData_1[0]"
                         :key="key"
                         :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{scope.row[key]}}
          </template>
        </el-table-column>
        <!-- </el-table-column>        
        <el-table-column 
          :show-overflow-tooltip="true"
          prop="MOC_Name"
          label="MOC_Name">
        </el-table-column>
        <el-table-column 
          :show-overflow-tooltip="true"
          prop="Param_Name"
          label="Param_Name">
        </el-table-column>
         <el-table-column 
          :show-overflow-tooltip="true"
          prop="Para_Description"
          label="Para_Description">
        </el-table-column> 
         <el-table-column 
          :show-overflow-tooltip="true"
          prop="Baseline_Value"
          label="Baseline_Value">
        </el-table-column> -->
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
                       :total="pageNum_1"
                       :pager-count="5"
                       @current-change="handleCurrentChange_1">
        </el-pagination>
      </div>

    </el-aside>
    <el-main>
      <el-button type="primary"
                 @click="addrow">新增</el-button>
      <el-form v-show="updatashow"
               ref="form"
               :model="form"
               label-width="110px">
        <el-form-item label="CATEGORY:">
          <el-input v-model="form.CATEGORY"></el-input>
        </el-form-item>
        <el-form-item label="CELLTYPE2:">
          <el-input v-model="form.CELLTYPE2"></el-input>
        </el-form-item>
        <el-form-item label="FILTER:">
          <el-input v-model="form.FILTER"></el-input>
        </el-form-item>
        <el-form-item label="MONAME:">
          <el-input v-model="form.MONAME"></el-input>
        </el-form-item>
        <el-form-item label="MOVALUE:">
          <el-input v-model="form.MOVALUE"></el-input>
        </el-form-item>
        <el-form-item label="PARANAME:">
          <el-input v-model="form.PARANAME"></el-input>
        </el-form-item>
        <el-form-item label="RECOMMENDEDVALUE:">
          <el-input v-model="form.RECOMMENDEDVALUE"></el-input>
        </el-form-item>
        <el-form-item label="VERSION:">
          <el-input v-model="form.VERSION"></el-input>
        </el-form-item>
        <el-button type="primary"
                   @click="onSubmit(selectrow)">确认</el-button>
        <el-button type="primary"
                   @click="cancel()">取消</el-button>
      </el-form>
      <el-button type="primary"
                 :loading="isloading"
                 @click="save">解析</el-button>

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
                :data="currentPageData_2">
        <el-table-column :label="key"
                         v-for="(date, key) in currentPageData_2[0]"
                         :key="key"
                         :show-overflow-tooltip="true">
          <template slot-scope="scope">
            {{scope.row[key]}}
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-wrapper">
        <el-pagination layout="prev, pager, next"
                       :total="pageNum_2"
                       :pager-count="5"
                       @current-change="handleCurrentChange_2">
        </el-pagination>
      </div>

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
      height: '',
      headers: {},
      tables: [],
      form: {
        'CATEGORY': '',
        'CELLTYPE2': '',
        'FILTER': '',
        'MONAME': '',
        'MOVALUE': '',
        'PARANAME': '',
        'RECOMMENDEDVALUE': '',
        'VERSION': ''
      },
      selectrow: -1,
      resultTable: {},
      resultTableName: [{ 'tableName': '错误信息表' }, { 'tableName': '核查结果表' }],
      oneTable: [],
      updatashow: false,
      isloading: false,

      currentPageData_1: [],
      pageNum_1: 0,
      tableName: '',

      currentPageData_2: [],
      pageNum_2: 0

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
    this.$http.post(this.user.httppath + '/api/Bulkcm/CheckCfg',
      {},
      this.headers
    ).then((response) => {
      console.log(response)
      this.tables = response

      // 刚打开页面时加载前10项、且自动生成分页数量
      this.handleCurrentChange_1(1)
      this.initPageNum_1()
    }).catch((error) => {
      console.log(error)
    })
  },
  mounted () {
    console.log(document.getElementsByClassName('el-container is-vertical')[0].offsetHeight)
    this.height = document.getElementsByClassName('el-container is-vertical')[0].offsetHeight - 100 + 'px'
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    // 点击跳转页面，显示对应的数据
    handleCurrentChange_1 (pageIndex) {
      // pageIndex = pageIndex || 1
      let pageSize = 11
      this.currentPageData_1 = this.tables.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize)
    },
    initPageNum_1 () {
      this.pageNum_1 = this.tables.length
    },
    handleCurrentChange_2 (pageIndex) {
      // pageIndex = pageIndex || 1
      let pageSize = 10
      this.currentPageData_2 = this.oneTable.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize - 1)
    },
    initPageNum_2 () {
      this.pageNum_2 = this.oneTable.length

      console.log(this.pageNum_2)
    },

    handleEdit (index, row) {
      this.updatashow = true
      this.selectrow = index
      this.form['CATEGORY'] = this.tables[index]['CATEGORY']
      this.form['CELLTYPE2'] = this.tables[index]['CELLTYPE2']
      this.form['FILTER'] = this.tables[index]['FILTER']
      this.form['MONAME'] = this.tables[index]['MONAME']
      this.form['MOVALUE'] = this.tables[index]['MOVALUE']
      this.form['PARANAME'] = this.tables[index]['PARANAME']
      this.form['RECOMMENDEDVALUE'] = this.tables[index]['RECOMMENDEDVALUE']
      this.form['VERSION'] = this.tables[index]['VERSION']
      console.log(index, row)
    },
    handleDelete (index, row) {
      this.tables.splice(index, 1)
      console.log(index, row)
    },
    addrow () {
      this.updatashow = true
      this.selectrow = -1
      this.form['CATEGORY'] = ''
      this.form['CELLTYPE2'] = ''
      this.form['FILTER'] = ''
      this.form['MONAME'] = ''
      this.form['MOVALUE'] = ''
      this.form['PARANAME'] = ''
      this.form['RECOMMENDEDVALUE'] = ''
      this.form['VERSION'] = ''
    },
    onSubmit (row) {
      if (row !== -1) {
        console.log(this.tables[row])
        this.tables[row]['CATEGORY'] = this.form['CATEGORY']
        this.tables[row]['CELLTYPE2'] = this.form['CELLTYPE2']
        this.tables[row]['FILTER'] = this.form['FILTER']
        this.tables[row]['MONAME'] = this.form['MONAME']
        this.tables[row]['MOVALUE'] = this.form['MOVALUE']
        this.tables[row]['PARANAME'] = this.form['PARANAME']
        this.tables[row]['RECOMMENDEDVALUE'] = this.form['RECOMMENDEDVALUE']
        this.tables[row]['VERSION'] = this.form['VERSION']
      } else {
        this.tables.push(this.form)
      }
      this.updatashow = false
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
      this.updatashow = false
    },
    save () {
      this.isloading = true
      this.$http.post(this.user.httppath + '/api/Bulkcm/ParamCheck',
        this.tables,
        this.headers
      ).then((response) => {
        this.resultTable = response
        this.isloading = false
        console.log(response)
        this.$notify({
          title: '成功',
          message: '解析完成: ',
          type: 'success'
        })
      }).catch((error) => {
        console.log(error)
      })
    },
    // handleRowChange (row) {
    //   console.log(row)
    //   console.log(this.resultTable)
    //   if (row['tableName'] === '错误信息表') {
    //     this.oneTable = this.resultTable['错误信息表']
    //   } else {
    //     // console.log()
    //     this.oneTable = this.resultTable['核查结果表']
    //   }
    //   console.log(this.oneTable)
    // },
    changeTableName () {
      console.log(this.tableName)
      if (this.tableName === '错误信息表') {
        this.oneTable = this.resultTable['错误信息表']
      } else {
        // console.log()
        this.oneTable = this.resultTable['核查结果表']
      }

      // 刚打开页面时加载前10项、且自动生成分页数量
      this.handleCurrentChange_2(1)
      this.initPageNum_2()
    }
  }
}
</script>
