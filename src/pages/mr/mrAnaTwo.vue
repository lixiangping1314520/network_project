<template>
  <el-container>
    <el-header>
      </br>
      <el-select v-model="typevalue"
                 size="small"
                 @change="mrtype()"
                 placeholder="mr 类型">
        <el-option v-for="item in typedate"
                   :key="item.value"
                   :value="item.value">
        </el-option>
      </el-select>
      <i class="el-icon-caret-right"></i>
      <el-select v-model="tablevalue"
                 size="small"
                 @change="mrtable()"
                 placeholder="mr 表名"
                 v-bind:disabled="tabledis">
        <el-option v-for="item in tabledate"
                   :key="item.value"
                   :value="item.value">
        </el-option>
      </el-select>
      <i class="el-icon-caret-right"></i>
      <el-select v-model="quotavalue"
                 size="small"
                 @change="mrquota()"
                 placeholder="mr 列名"
                 v-bind:disabled="quotadis">
        <el-option v-for="item in quotadata"
                   :key="item.value"
                   :value="item.value">
        </el-option>
      </el-select>
      <i class="el-icon-caret-right"></i>
      <el-select v-model="cellvalue"
                 size="small"
                 placeholder="mr 小区名称"
                 v-bind:disabled="celladis">
        <el-option v-for="item in celldata"
                   :key="item.value"
                   :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary"
                 icon="el-icon-search"
                 size="mini"
                 @click="counter()">开始查询</el-button>
      </br>
      <el-select class="mrcolumn"
                 v-model="quotavalue2"
                 size="small"
                 placeholder="mr 列名"
                 v-bind:disabled="quotadis2">
        <el-option v-for="item in quotadata2"
                   :key="item.value"
                   :value="item.value">
        </el-option>
      </el-select>
      &nbsp &nbsp &nbsp
      </br>
      <div class="block">
        </br>
        备选项:
        </br>
        <el-date-picker v-model="time"
                        value-format="yyyy-MM-dd HH:hh:ss"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
      </div>
      </br>
      <m-input placeholder="门限值 低"
               v-model="thresholdLow"
               theme="danger"
               size="small" />
      <i class="el-icon-minus"></i>
      <m-input placeholder="门限值 高"
               v-model="thresholdHight"
               theme="danger"
               size="small" />
    </el-header>
    <el-main>
      </br> </br> </br> </br> </br> </br> </br> </br>
      <div id="myChart"
           :style="{width: '900px', height: '300px'}"></div>
      <el-table :data="data"
                style="width: 100%">
        <el-table-column prop="objId"
                         label="objId">
        </el-table-column>
        <el-table-column prop="reportTime"
                         label="reportTime">
        </el-table-column>
        <el-table-column prop="userLabel"
                         label="userLabel">
        </el-table-column>
        <el-table-column prop="userLabel"
                         label="userLabel"
                         width="180">
        </el-table-column>
        <el-table-column prop=value1
                         :label=quotavalue>
        </el-table-column>
        <el-table-column prop=value2
                         :label=quotavalue2>
        </el-table-column>

        <!-- <el-table-column :label="key" v-for="(date, key) in data[0]" :key="key">
        <template slot-scope="scope">
          {{scope.row[key]}}
        </template>
      </el-table-column> -->
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      users: (state) => state.user
    })
  },
  data () {
    return {
      // 表结构
      tableHead: [],
      typedate: [{
        value: 'MRO'
      }, {
        value: 'MRE'
      }, {
        value: 'MRS'
      }],
      typevalue: '',

      tabledate: [],
      tablevalue: '',
      tabledis: true,

      quotadata: [],
      quotavalue: '',
      quotadis: true,

      celldata: [],
      cellvalue: '',
      celladis: true,

      quotadata2: [],
      quotavalue2: '',
      quotadis2: true,

      time: '',
      thresholdLow: '',
      thresholdHight: '',
      data: [],
      datap: []
    }
  },
  created () {
    console.log(this.users)
    var headers = { headers: { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'mr' } }
    this.$http.post(this.user.httppath + '/api/MRTest/MrInfo',
      {},
      headers
    ).then((response) => {
      console.log('created')
      this.tableHead = response
      console.log(this.tableHead)
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    counter () {
      this.datap = []
      // selectedOptions2
      console.log('counter 这是计算函数函数')
      var sStorage = sessionStorage.getItem('user')
      var threshold = ''
      if (isNaN(this.thresholdLow) || isNaN(this.thresholdHight)) {
        this.$notify({
          title: '警告',
          message: '门限设置错误',
          type: 'warning'
        })
        return
      } else {
        threshold = this.thresholdLow + ',' + this.thresholdHight
      }
      if (threshold === ',') {
        threshold = ''
      }
      var mrcolumn = ''
      if (this.quotavalue.length !== 0 && this.quotavalue2.length !== 0) {
        mrcolumn = this.quotavalue + ',' + this.quotavalue2
      }
      var times = ''
      if (this.time !== null) {
        times = this.time.toString()
      }
      var mr = {
        'mrtype': this.typevalue,
        'mrtable': this.tablevalue,
        'mrcolumn': mrcolumn,
        'mrcell': this.cellvalue,
        'time': times,
        'threshold': threshold
      }
      // var mr = { 'mrtype': this.typevalue, 'mrtable': this.tablevalue, 'mrcolumn': this.quotavalue, 'mrcell': this.cellvalue, 'time': this.time.toString(), 'threshold': threshold }
      if (this.typevalue.length === 0 || this.tablevalue.length === 0 || this.quotavalue.length === 0 || this.quotavalue2.length === 0 || this.cellvalue.length === 0) {
        this.$notify({
          title: '警告',
          message: '数据不完整',
          type: 'warning'
        })
        return
      }
      console.log(mr)
      var headers = { headers: { 'projectname': this.prom.prom_pname, 'username': sStorage.username, 'filetype': 'mr' } }
      this.$http.post(this.user.httppath + '/api/MRTest/TwoDAnalysis',
        mr,
        headers
      ).then((response) => {
        console.log(response)
        this.data = response
        var vulue1 = 0
        var vulue2 = 0
        for (var key in response) {
          vulue1 = parseFloat(response[key].value1)
          vulue2 = parseFloat(response[key].value2)
          var arary = []
          arary.push(vulue1)
          arary.push(vulue2)
          this.datap.push(arary)
        }
        this.drawLine()
        console.log(this.datap)
      }).catch((error) => {
        console.log(error)
      })
    },
    mrtype () {
      // 得到表名称
      console.log('函数 mrtype')
      if (this.tableHead === []) {
        return
      }
      this.tabledate = []
      this.tablevalue = ''
      this.tabledis = false
      for (var key in this.tableHead[this.typevalue]) {
        if (key === 'objId') {
          continue
        }
        var objc = {}
        objc.value = key
        this.tabledate.push(objc)
      }
      this.quotadata = []
      this.quotavalue = ''
      this.quotadis = true
      this.quotadata2 = []
      this.quotavalue2 = ''
      this.quotadis2 = true
      this.celldata = []
      this.cellvalue = ''
      this.celladis = true

      // mr类型点击事件
      console.log(this.tabledis)
      console.log(this.tabledate)
      console.log('------')
    },
    mrtable () {
      // 得到表字段
      // mr类型点击事件
      console.log('函数 mrtable')
      this.quotadis = false
      this.quotadata = []
      this.quotavalue = ''
      this.quotadis2 = false
      this.quotadata2 = []
      this.quotavalue2 = ''
      var t = this.tableHead[this.typevalue][this.tablevalue]
      for (var key in this.tableHead[this.typevalue][this.tablevalue]) {
        var objc = {}
        objc.value = t[key]
        this.quotadata.push(objc)
        this.quotadata2.push(objc)
      }
      this.celldata = []
      this.cellvalue = ''
      this.celladis = true
    },
    mrquota () {
      // 得到Cell 列表
      // mr类型点击事件
      this.celladis = false
      this.celldata = []
      this.cellvalue = ''
      var objc1 = {}
      objc1.value = 'all'
      this.celldata.push(objc1)
      var t = this.tableHead[this.typevalue]['objId']
      for (var key in t) {
        var objc = {}
        objc.value = t[key]
        this.celldata.push(objc)
      }
      console.log('函数 mrquota')
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      var option = {
        title: { text: '二维分析' },
        xAxis: {
          name: this.quotavalue,
          nameLocation: 'middle'
        },
        yAxis: {
          name: this.quotavalue2
        },
        dataZoom: [{
          type: 'slider',
          show: true,
          xAxisIndex: [0],
          start: 1,
          end: 100
        },
        {
          type: 'slider',
          show: true,
          yAxisIndex: [0],
          left: '93%',
          start: 0,
          end: 100
        },
        {
          type: 'inside',
          xAxisIndex: [0],
          start: 0,
          end: 100
        },
        {
          type: 'inside',
          yAxisIndex: [0],
          start: 0,
          end: 100
        }],
        series: [{
          symbolSize: 6,
          data: this.datap,
          // data: [
          //   [1,2],
          //   [3,4],
          //   [5,6]
          // ],
          type: 'scatter'
        }]
      }
      if (option && typeof option === 'object') {
        myChart.setOption(option, true)
      }

      // myChart.setOption({
      //   title: { text: '二维分析' },
      //   tooltip: {},
      //   xAxis: {
      //     data: ['cell1', 'cell2', 'cell3']
      //   },
      //   yAxis: {},
      //   series: [{
      //     name: '数据',
      //     type: 'bar',
      //     data: [-5, 20, 36]
      //   }]
      // })
    }
  }
}
</script>

<style>
.mrcolumn {
  margin-left: 460px;
}
</style>
