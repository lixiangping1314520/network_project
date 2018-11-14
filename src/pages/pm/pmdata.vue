<template>
  <el-container>
    <el-container>
      <el-aside width="300px">
        <el-input placeholder="输入关键字进行过滤"
                  v-model="filterText">
        </el-input>
        <el-tree class="filter-tree"
                 :data="getpm_systable"
                 :props="defaultProps"
                 default-expand-all
                 :filter-node-method="filterNode"
                 @node-click="handleNodeClick">
          ref="tree2">
        </el-tree>
      </el-aside>
      <el-container>
        <el-main>
          <el-table :data="data_list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    style="width: 100%">
            <el-table-column :label="key"
                             v-for="(date, key) in data_list[0]"
                             :key="key">
              <template slot-scope="scope">
                {{scope.row[key]}}
              </template>
            </el-table-column>
          </el-table>
        </el-main>
        <el-footer>
          <diV style="text-align: center">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page.sync="currentPage"
                           :page-size="pagesize"
                           layout="prev, pager, next, jumper"
                           :total="total">
            </el-pagination>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user,
      pm: (state) => state.pm
    }),
    ...mapGetters(['getpm_systable'])
  },
  data () {
    return {
      total: 0, // 默认数据总数
      pagesize: 10, // 每页的数据条数
      currentPage: 1, // 默认开始页面
      data_list: [],
      filterText: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText (val) {
      this.$refs.tree2.filter(val)
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log('这是 handleNodeClick 函数')
      console.log('这是跳转函数')
      var pmtype = ''
      if (this.pm.pm_typeNow === '3g rbs') {
        pmtype = 'PM_3G_RBS'
      } else if (this.pm.pm_typeNow === '3g rnc') {
        pmtype = 'PM_3G_RNC'
      } else if (this.pm.pm_typeNow === '4g') {
        pmtype = 'PM_4G'
      } else {
        pmtype = 'PM_NBIoT'
      }
      console.log(this.pm.pm_typeNow)
      var headers = { headers: { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': pmtype } }
      var mrname = data.id
      console.log(data.id)
      this.$http.post(this.user.httppath + '/api/Pm/GetData',
        { 'tableName': mrname },
        headers
      ).then((response) => {
        console.log(response)
        this.data_list = response
      }).catch((error) => {
        console.log(error)
      })
      console.log(data)
      console.log(data.label)
      console.log(data.id)
    },
    filterNode (value, data) {
      if (!value) return true
      console.log(value)
      console.log(data)
      return data.label.indexOf(value) !== -1
    },
    handleSizeChange (val) {
      // 条数数目改变的时候发生
      console.log(`当前页: ${val}`)
    },
    handleCurrentChange (currentPage) {
      // 当前页面该改变时发生
      this.currentPage = currentPage
      console.log(`当前页: ${currentPage}`)
    }
  }
}
</script>

<style>
.elmro {
  background-color: rgb(244, 245, 248);
  color: rgb(51, 51, 51);
  line-height: 60px;
  text-align: center;
}
.el-aside {
  color: #333;
}
</style>
