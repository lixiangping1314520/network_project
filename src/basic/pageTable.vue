<template>
  <div>
    <!-- <p>带搜索项，分页表结构</p> -->
    <el-input placeholder="输入关键字进行过滤"
              v-model="search"
              prefix-icon="el-icon-search"
              size="mini"
              clearable
              style="width:200px"></el-input>
    <el-table ref="multipleTable"
              :data="tables.slice((currentPage-1)*pagesize,currentPage*pagesize)"
              tooltip-effect="dark"
              style="width: 100%">
      <el-table-column :label="date"
                       v-for="(date, key) in columns"
                       :key="key"
                       :show-overflow-tooltip="true">
        <template slot-scope="scope">{{scope.row[key]}}</template>
      </el-table-column>
    </el-table>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page.sync="currentPage"
                   :page-size="pagesize"
                   layout="prev, pager, next, jumper"
                   :pager-count="5"
                   :total="total">
    </el-pagination>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    tableData: {
      // 待呈现的表 格式 [{'column1': 'value1', 'column2': 'value2'},{'column1': 'value1', 'column2': 'value2'}]
      type: Array,
      default: () => []
    }
    // pagesize: {
    //   // 每页的数据条数
    //   type: Number,
    //   default: 10
    // },
    // currentPage: {
    //   // 默认开始页面
    //   type: Number,
    //   default: 1
    // }
  },
  data () {
    return {
      search: '', // 搜索的字段
      total: 0,
      columns: {},
      pagesize: 10,
      currentPage: 1
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (selection) {
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  watch: {
    tableData (val) {
      console.log('watch 函数')
      this.columns = {}
      for (let key in this.tableData[0]) {
        this.columns[key] = key
      }
      this.total = this.tableData.length
      // this.pagesize = 10
      // this.currentPage = 1
    }
  },
  computed: {
    // 模糊搜索
    tables () {
      const search = this.search
      if (search) {
        return this.tableData.filter(data => {
          return Object.keys(data).some(key => {
            if (!this.columns.hasOwnProperty(key)) {
              return false
            } else {
              return (
                String(data[key])
                  .toLowerCase()
                  .indexOf(search) > -1
              )
            }
          })
        })
      }
      return this.tableData
    }
  }
}
</script>
 <style type="text/css">
.output-table {
  display: inline-block;
}
</style>