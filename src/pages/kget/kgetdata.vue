<template>
  <el-container>
       <br>
      <export-table :tableData="result"></export-table>
      <br>
      <el-aside width="300px">
        <el-table @row-click="handleRowChange"
                  :highlight-current-row="true"
                  :data="showTables"
                  style="width: 300px">
          <el-table-column :show-overflow-tooltip="true"
                           prop="tableName"
                           label="表名称">
          </el-table-column>
        </el-table>

        <div class="pagination-wrapper">
          <el-pagination layout="prev, pager, next"
                         :pager-count="5"
                         :total="pageNum"
                         @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </el-aside>
      <el-main>
        <el-main>
          <el-table :data="result"
                    style="width: 100%">
            <el-table-column :label="key"
                             v-for="(date, key) in result[0]"
                             :key="key"
                             :show-overflow-tooltip="true">
              <template slot-scope="scope">
                {{scope.row[key]}}
              </template>
            </el-table-column>
          </el-table>
          </div>
        </el-main>
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
      result: [],
      rowDate: {},
      tables: [],
      pageNum: 0,
      showTables: []
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
    this.$http.post(this.user.httppath + '/api/Kget/TableName',
      {},
      this.headers
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
      let pageSize = 10
      console.log(1)
      this.showTables = this.tables.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize - 1)
    },
    initPageNum () {
      this.pageNum = this.tables.length
    },
    handleSelectionChange () {
      console.log('handleSelectionChange 函数')
    },
    handleRowChange (row) {
      console.log('这是 函数handleRowChange', row)
      this.rowDate = row
      var params = { tableName: row.tableName }
      this.$http.post(this.user.httppath + '/api/Kget/TableData',
        params,
        this.headers
      ).then((response) => {
        console.log(response)
        this.result = response
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