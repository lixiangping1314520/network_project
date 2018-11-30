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
      <el-button type="primary"
                 icon="el-icon-search"
                 size="mini"
                 :loading="isloading"
                 @click="getkpi()">解析</el-button>
      </br> </br>
    </el-header>
    <el-main>
      <el-container>
        <el-aside width="300px">
          <v-selectTable ref='kpitable'
                         :tableData="pmData"
                         :columns="pmDataColums"> </v-selectTable>
          <!-- @muEvent="test" -->
        </el-aside>
        <el-main>
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
import selectTable from '../../basic/selectTable.vue'
export default {
  components: {
    'v-selectTable': selectTable
  },
  computed: {
    ...mapGetters(['getpm_kpitypety']),
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user,
      pm: (state) => {
        return state.pm
      },
      pmTypeNow: (state) => state.pm.pm_typeNow
    }),
    initPageNum () {
      return this.pm.pm_kpivalues.length
    },
    getpmtype () {
      var thisvalue = ''
      if (this.pm.pm_typeNow === '3g rbs') {
        thisvalue = 'PM_3G_RBS'
      } else if (this.pm.pm_typeNow === '3g rnc') {
        thisvalue = 'PM_3G_RNC'
      } else if (this.pm.pm_typeNow === '4g') {
        thisvalue = 'PM_4G'
      } else {
        thisvalue = 'PM_NBIoT'
      }
      return thisvalue
    }
    // mrtype () {
    //   var mrtype = ''
    //   if (this.pm.pm_typeNow === '3g rbs') {
    //     mrtype = 'PM_3G_RBS'
    //   } else if (this.pm.pm_typeNow === '3g rnc') {
    //     mrtype = 'PM_3G_RNC'
    //   } else if (this.pm.pm_typeNow === '4g') {
    //     mrtype = 'PM_4G'
    //   } else {
    //     mrtype = 'PM_NBIoT'
    //   }
    //   return mrtype
    // }
  },
  data () {
    return {
      result: [], // 结果表
      rowDate: {},
      kpitypety: [
        { name: '接入' },
        { name: '掉话' },
        { name: '切换' },
        { name: '话务量' }
      ],
      kpiType: '接入', // kpi所属类型
      kpiType_en: '',
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
      pmData: [], // 某一类KPI指标列表
      pmDataColums: { kpiC: '中文名称' },
      isloading: false
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
  },
  methods: {
    ...mapMutations(['setpm_kpivules', 'setpname_prom']),
    // 点击跳转页面，显示对应的数据
    handleCurrentChange (pageIndex) {
      this.pmData = this.pm.pm_kpivalues
    },
    typeChange () {
      console.log('typeChange 切换类型函数')
      this.setpm_kpivules(this.kpiType)
      this.handleCurrentChange(1)
      console.log(this.kpiType)
      this.$refs.kpitable.multipleSelection = []
    },
    output () {
      if (this.result.length !== 0) {
        outputTable(this.result)
      }
    },
    getkpi () {
      var kpinames = []
      console.log('这是getkpi 函数')
      console.log(this.$refs.kpitable.multipleSelection)
      var qwe = this.$refs.kpitable.multipleSelection
      for (let index in qwe) {
        kpinames.push(qwe[index]['kpiE'])
      }
      var params = [{ 'kpiName': kpinames, 'kpiType': this.kpiType_en }]
      var head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': this.getpmtype }
      console.log(head)
      this.isloading = true
      this.$http.post(this.user.httppath + '/api/Pm/GetKpiData',
        params,
        { headers: head }
      ).then((response) => {
        this.result = response
        this.$notify({
          title: '成功',
          message: '解析成功',
          type: 'success'
        })
        this.isloading = false
      }).catch((error) => {
        this.$notify({
          title: '警告',
          message: error,
          type: 'warning'
        })
        this.isloading = false
      })
    }
  },
  watch: {
    pmTypeNow (val) {
      this.pmData = []
      this.$refs.kpitable.multipleSelection = []
    },
    kpiType (val) {
      if (val === '接入') {
        this.kpiType_en = 'Integrity'
      } else if (val === '掉话') {
        this.kpiType_en = 'Mobility'
      } else if (val === '切换') {
        this.kpiType_en = 'Retainability'
      } else if (val === '话务量') {
        this.kpiType_en = 'Accessibility'
      } else {
        this.kpiType_en = val
      }
    }
  }
}
</script>
<style>
th {
  text-align: left;
}
</style>