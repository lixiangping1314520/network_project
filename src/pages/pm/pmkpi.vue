<template>
  <el-container>
    <el-header>
      </br>
      <el-radio-group @change="typeChange"
                      v-model="kpiType"
                      size="mini">
        <el-radio-button :label="item.name"
                         v-for="(item, index) in getpm_kpitypety"
                         :key="index"></el-radio-button>
      </el-radio-group>
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
                    :data="pmData"
                    style="width: 300px">
            <el-table-column prop="kpiE"
                             label="kpi 名称">
            </el-table-column>
          </el-table>

          <div class="pagination-wrapper">
            <el-pagination layout="prev, pager, next"
                           :pager-count="5"
                           :total="initPageNum"
                           @current-change="handleCurrentChange">
            </el-pagination>
          </div>

        </el-aside>
        <el-main>
          <table border="0.5">
            <tr>
              <th>kpi 中文名称 : {{rowDate.kpiC}}</th>
            </tr>
            <tr>
              <th>kpi 英文名称 : {{rowDate.kpiE}}</th>
            </tr>
            <tr>
              <th>kpi 计算公式 : {{rowDate.counter}}</th>
            </tr>
          </table>
          <el-main>
            <el-table :data="result"
                      style="width: 100%">
              <el-table-column :label="key"
                               v-for="(date, key) in result[0]"
                               :key="key">
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
import { mapState, mapMutations, mapGetters } from 'vuex'
import outputTable from '../../basic/outputTable.js'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user,
      pm: (state) => {
        return state.pm
      }
    }),
    ...mapGetters(['getpm_kpitypety']),
    initPageNum () {
      // this.pageNum = this.pm.pm_kpivalues.length
      return this.pm.pm_kpivalues.length
    }
  },
  data () {
    return {
      result: [],
      rowDate: {},
      kpitypety: [
        { name: '接入' },
        { name: '掉话' },
        { name: '切换' },
        { name: '话务量' }
      ],
      kpiType: '接入',
      kpiTable2: [],
      kpiTable: [{
        kpiC: 'RNC 建立连接请求次数',
        kpiE: 'RNC 建立连接请求次数',
        counter: 'pmRrcConnEstabAtt - pmRrcConnEstabAttReatt',
        isCalculate: false
      }, {
        kpiC: 'RNC 连接建立成功次数',
        kpiE: 'RNC 连接建立成功次数',
        counter: 'pmRrcConnEstabAtt - pmRrcConnEstabAttReatt',
        isCalculate: false
      }],
      pmData: [],
      pageNum: 0
    }
  },
  mounted () {
    this.typeChange()
  },
  methods: {
    ...mapMutations(['setpm_kpivules']),
    // 点击跳转页面，显示对应的数据
    handleCurrentChange (pageIndex) {
      // pageIndex = pageIndex || 1
      let pageSize = 10
      this.pmData = this.pm.pm_kpivalues.slice((pageIndex - 1) * pageSize, (pageIndex - 1) * pageSize + pageSize - 1)
      console.log(this.pmData)
    },
    typeChange () {
      console.log('typeChange 切换类型函数')
      this.setpm_kpivules(this.kpiType)
      this.handleCurrentChange(1)
      console.log(this.kpiType)
    },
    output () {
      // var du = [{name: '1', id: '2'},{name: '1', id: '2'}]
      // outputTable(du)
      if (this.result.length !== 0) {
        outputTable(this.result)
      }
    },
    handleSelectionChange () {
      console.log('handleSelectionChange 函数')
    },
    handleRowChange (row) {
      console.log(row)
      // console.log(row)
      this.rowDate = row
      var mrtype = ''
      if (this.pm.pm_typeNow === '3g rbs') {
        mrtype = 'PM_3G_RBS'
      } else if (this.pm.pm_typeNow === '3g rnc') {
        mrtype = 'PM_3G_RNC'
      } else if (this.pm.pm_typeNow === '4g') {
        mrtype = 'PM_4G'
      } else {
        mrtype = 'PM_NBIoT'
      }
      var headers = { headers: { 'projectname': this.prom.prom_pname, 'username': this.user.user.username, 'filetype': mrtype } }
      // var mr = ['MRO', 'MRE', 'MRS']
      var params = { 'kpiName': row.kpiE, 'kpiType': this.kpiType }
      this.$http.post(this.user.httppath + '/api/Pm/GetKpiData',
        params,
        headers
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