// 带搜索和选择框的表格
<template>
  <div>
    <!-- <el-input placeholder="输入关键字进行过滤"
              v-model="search"></el-input> -->
    <el-input placeholder="输入关键字进行过滤"
              v-model="search"
              prefix-icon="el-icon-search"
              size="mini"
              clearable
              style="width:200px"></el-input>
    <el-table ref="multipleTable"
              :data="tables"
              tooltip-effect="dark"
              style="width: 100%"
              @select-all="selectAll"
              @select="selects">
      <el-table-column type="selection"
                       width="55"></el-table-column>
      <el-table-column :label="date"
                       v-for="(date, key) in columns"
                       :key="key"
                       :show-overflow-tooltip="true">
        <template slot-scope="scope">{{scope.row[key]}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
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
  },
  props: {
    columns: {
      // 待呈现的列 格式 {'column1': 'show-column1','column2': 'show-column2'}
      type: Object,
      default: () => { }
    },
    tableData: {
      // 待呈现的表 格式 [{'column1': 'value1', 'column2': 'value2'},{'column1': 'value1', 'column2': 'value2'}]
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      search: '', // 搜索的字段
      multipleSelection: []// 已经选中的表
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
    selectAll (selection) {
      this.multipleSelection = selection
    },
    selects (selection, onerows) {
      this.multipleSelection = selection
    }
  },
  watch: {
    tables (val) { // 监测搜索后数组的变化
      setTimeout(() => {
        this.toggleSelection(this.multipleSelection)
      }, 250)
    }
  }
}
</script>