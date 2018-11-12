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
          <el-select v-model="value"
                     size="mini"
                     placeholder="规划结果"
                     :change="getOneTable()">
            <el-option v-for="item in resultTableName"
                       :key="item.value"
                       :label="item.value"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-aside>
        <el-main>
          <el-main>
            <el-table :data="oneTable"
                      style="width: 100%">
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
  data () {
    return {
      headers: {},
      resultTable: {},
      resultTableName: [{
        value: '3g 邻区规划'
      }, {
        value: '4g 邻区规划'
      }, {
        value: 'pci/rsn 规划'
      }],
      value: '',
      oneTable: []
    }
  },
  methods: {
    output () {
      if (this.oneTable.length !== 0) {
        outputTable(this.oneTable)
      }
    },
    getOneTable () {
      if (this.value === '3g 邻区规划') {
        this.oneTable = this.resultTable['lte']
      } else if (this.value === '3g 邻区规划') {
        this.oneTable = this.resultTable['umts']
      } else {
        this.oneTable = this.resultTable['pci']
      }
    }
  },
  created () {
    console.log('neiplan crate 函数')
    this.headers = { headers: { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'neipaln' } }
    this.$http.post(this.user.httppath + '/api/NeiPlan/Result',
      {},
      this.headers
    ).then((response) => {
      console.log('这是 create  success')
      console.log(response)
      this.resultTable = response
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
<style>
th {
  text-align: left;
}
</style>
