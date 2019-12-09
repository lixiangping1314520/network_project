<template>
  <el-container>
    <el-main>
      <el-container>
        <el-aside width="300px">
          <el-table @row-click="handleRowChange"
                    :highlight-current-row="true"
                    :data="tables"
                    style="width: 300px">
            <el-table-column prop="tableName"
                             label="表名称"
                             :show-overflow-tooltip="true">
            </el-table-column>
          </el-table>
        </el-aside>
        <el-main>
          <export-table :tableData="result" style="margin-top: 10px;"></export-table>
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
        </el-main>
      </el-container>
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
      tables: []
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
    this.headers = { headers: { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'worktable ' } }
    this.$http.post(this.user.httppath + '/api/Worktable/TableName',
      {},
      this.headers
    ).then((response) => {
      if (response !== '不能操作该工程') {
        this.tables = response
      }
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    handleSelectionChange () {
      console.log('handleSelectionChange 函数')
    },
    handleRowChange (row) {
      console.log('这是 函数handleRowChange')
      this.rowDate = row
      var params = { tableName: row.tableName }
      this.$http.post(this.user.httppath + '/api/Worktable/TableData',
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