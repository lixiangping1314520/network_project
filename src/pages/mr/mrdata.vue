<template>
  <el-container>
    <el-header class="elmro">这是MRO的数据</el-header>
    <el-container>
      <el-aside width="200px">
        <el-input placeholder="输入关键字进行过滤"
                  v-model="filterText">
        </el-input>
        <el-tree class="filter-tree"
                 :data="headerData2"
                 :props="defaultProps"
                 default-expand-all
                 :filter-node-method="filterNode"
                 @node-click="handleNodeClick">
          ref="tree2">
        </el-tree>

        <export-table :tableData="data_list"></export-table>
      </el-aside>
      <el-container>
        <el-main>
          <el-table :data="data_list.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                    style="width: 100%">
            <el-table-column :label="key"
                             v-for="(date, key) in data_list[0]"
                             :key="key"
                             :show-overflow-tooltip="true">
              <template slot-scope="scope">
                {{scope.row[key]}}
              </template>
            </el-table-column>
          </el-table>
        </el-main>
        <el-footer>
          <diV style="text-align: left">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page.sync="currentPage"
                           :page-size="pagesize"
                           layout="prev, pager, next, jumper"
                           :pager-count="5"
                           :total="total">
            </el-pagination>
          </div>
        </el-footer>
      </el-container>
    </el-container>
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
      total: 0, // 默认数据总数
      pagesize: 10, // 每页的数据条数
      currentPage: 1, // 默认开始页面
      data_list: [],
      data_list2: [{ 'id': '1', 'name': 'duhanxu' }, { 'id': '2', 'name': 'hedajuan' }, { 'id': '3', 'name': 'duhanxu' }, { 'id': '4', 'name': 'hedajuan' }],
      filterText: '',
      headerData2: [],
      headerData: [{
        id: 1,
        label: 'MRO',
        children: [{
          id: 4,
          label: 'ltescplrulqci1'
        },
        {
          id: 5,
          label: 'ltescrip'
        },
        {
          id: 6,
          label: 'ltescrsrp'
        }
        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
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
    this.headers = { headers: { 'projectname': this.prom.prom_pname, 'username': this.user.user.username, 'filetype': 'mr' } }
    console.log('mrdata.vue create 函数')
    // console.log(localStorage.getItem('pname'))
    console.log(this.prom.prom_pname)
    console.log(this.user.user.username)
    this.$http.post(this.user.httppath + '/api/MRTest/GetTableName',
      {},
      this.headers
    ).then((response) => {
      console.log('created')
      this.headerData2 = response
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    handleNodeClick (data) {
      console.log('这是 handleNodeClick 函数')
      // var mr = ['MRO', 'MRE', 'MRS']
      var mrname = data.id
      this.$http.post(this.user.httppath + '/api/MRTest/GetData',
        { 'tableName': mrname },
        this.headers
      ).then((response) => {
        console.log(response)
        // this.data_list = JSON.parse(response)
        this.data_list = response
        this.total = this.data_list.length
      }).catch((error) => {
        console.log(error)
      })
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
  },
  watch: {
    filterText (val) {
      this.$refs.tree2.filter(val)
    }
  }
}
</script>

<style>
.elmro {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  text-align: center;
}

.el-aside {
  color: #333;
}

.filter-tree{
  height: 400px;
  overflow-y: scroll; 
}
</style>
