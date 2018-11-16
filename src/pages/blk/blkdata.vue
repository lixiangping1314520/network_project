<template>
  <el-container>
    <el-header>
      </br>
      <el-button type="primary"
                 icon="el-icon-search"
                 size="mini"
                 @click="output()">导出</el-button>
      </br> </br>
    </el-header>
    <el-main>
      <el-container>
        <el-aside width="300px">
          <el-table @row-click="handleRowChange"
                    :highlight-current-row="true"
                    :data="currentPageData_1"
                    style="width: 300px">
            <el-table-column prop="tableName"
                             label="表名称"
                             :show-overflow-tooltip="true">
            </el-table-column>
          </el-table>
          <div class="pagination-wrapper">
            <el-pagination layout="prev, pager, next"
                           :total="pageNum_1"
                           :pager-count="5"
                           :page-size="8"
                           @current-change="handleCurrentChange_1">
            </el-pagination>
          </div>
        </el-aside>
        <el-main>
          <el-main>
            <el-table :data="currentPageData_2"
                      style="width: 100%">
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
                             :page-size="8"
                             @current-change="handleCurrentChange_2">
              </el-pagination>
            </div>
          </el-main>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
import outputTable from '../../basic/outputTable.js'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user
    })
  },
  destroyed () {
    // this.tables = []
    // this.result = []
  },
  data () {
    return {
      headers: {},
      result: [],
      rowDate: {},
      tables: [],
      currentPageData_1: [],
      pageNum_1: 0,
      currentPageData_2: [],
      pageNum_2: 0
    }
  },
  created () {
    console.log('bulkcm crate 函数')
    this.headers = { headers: { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'bulkcm' } }
    this.$http.post(this.user.httppath + '/api/Bulkcm/GetTableName',
      {},
      this.headers
    ).then((response) => {
      this.tables = response

      // 刚打开页面时加载前10项、且自动生成分页数量
      this.handleCurrentChange_1(1)
      this.initPageNum_1()
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    // 点击跳转页面，显示对应的数据
    handleCurrentChange_1 (pageIndex) {
      // pageIndex = pageIndex || 1
      let pageSize = 8
      this.currentPageData_1 = this.tables.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize)
    },
    initPageNum_1 () {
      this.pageNum_1 = this.tables.length
    },

    // 点击跳转页面，显示对应的数据
    handleCurrentChange_2 (pageIndex) {
      // pageIndex = pageIndex || 1
      let pageSize = 8
      this.currentPageData_2 = this.result.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize)
    },
    initPageNum_2 () {
      this.pageNum_2 = this.result.length
    },

    output () {
      if (this.result.length !== 0) {
        outputTable(this.result)
      }
    },
    handleSelectionChange () {
      console.log('handleSelectionChange 函数')
    },
    handleRowChange (row) {
      console.log('这是 函数handleRowChange')
      this.rowDate = row
      var params = { tableName: row.tableName }
      this.$http.post(this.user.httppath + '/api/Bulkcm/GetData',
        params,
        this.headers
      ).then((response) => {
        console.log(response)
        this.result = response
        // 刚打开页面时加载前10项、且自动生成分页数量
        this.handleCurrentChange_2(1)
        this.initPageNum_2()
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style>
th {
  text-align: left;
}
</style>