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
                 placeholder="mr 表名称"
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
                 placeholder="mr 表名称"
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
      &nbsp &nbsp &nbsp
      <el-button type="primary"
                 icon="el-icon-search"
                 size="mini"
                 @click="counter()">开始查询</el-button>
      </br>
      <div class="block">
        </br>
        备选项:
        </br>
        <div class="block">
          <el-date-picker v-model="time"
                          value-format="yyyy-MM-dd HH:hh:ss"
                          type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </div>
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
        <el-table-column :label="key"
                         v-for="(date, key) in data[0]"
                         :key="key">
          <template slot-scope="scope">
            {{scope.row[key]}}
          </template>
        </el-table-column>
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

      time: '',
      thresholdLow: '',
      thresholdHight: '',
      drawX: [],
      drawY: [],
      data: []
    }
  },
  methods: {
    counter () {
      this.drawX = []
      this.drawY = []
      console.log('counter 这是计算函数函数')
      // var sStorage = sessionStorage.getItem('user')
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
      var times = ''
      if (this.time !== null) {
        times = this.time.toString()
      }
      var mr = { 'mrtype': this.typevalue, 'mrtable': this.tablevalue, 'mrcolumn': this.quotavalue, 'mrcell': this.cellvalue, 'time': times, 'threshold': threshold }
      if (this.typevalue.length === 0 || this.tablevalue.length === 0 || this.quotavalue.length === 0 || this.cellvalue.length === 0) {
        this.$notify({
          title: '警告',
          message: '数据不完整',
          type: 'warning'
        })
      }
      console.log(mr)
      var headers = { headers: { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'mr' } }
      this.$http.post('http://192.168.0.237:2860/api/MRTest/OneDAnalysis',
        mr,
        headers
      ).then((response) => {
        this.data = response
        for (var key in response) {
          this.drawX.push(response[key].reportTime)
          this.drawY.push(response[key].value)
        }
        console.log(response)
        console.log('这是横坐标')
        console.log(this.drawX)
        console.log('这是纵坐标')
        console.log(this.drawY)
        this.drawLine()
      }).catch((error) => {
        console.log(error)
      })
    },
    mrtype () {
      // 得到表名称
      console.log('函数 mrtype')
      console.log(this.tableHead)
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
      var t = this.tableHead[this.typevalue][this.tablevalue]
      for (var key in this.tableHead[this.typevalue][this.tablevalue]) {
        var objc = {}
        objc.value = t[key]
        this.quotadata.push(objc)
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
      console.log(this.tableHead[this.typevalue])
      console.log(this.tableHead[this.typevalue]['objId'])
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
        title: { text: '一维分析' },
        xAxis: {
          name: '时间',
          nameLocation: 'middle',
          type: 'category',
          data: this.drawX
        },
        yAxis: {
          name: this.quotavalue,
          type: 'value'
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
          data: this.drawY,
          type: 'line'
        }]
      }
      if (option && typeof option === 'object') {
        myChart.setOption(option, true)
      }
    }
  },
  created () {
    console.log('这是 created 函数')
    // console.log(this.users)
    // var headers = {headers: {'projectname': this.prom.prom_pnm_pname, 'username': this.users.user.usernaername, 'filetype': 'm'}}
    // console.log(this.users.user.usernaername)
    // console.log(this.prom.prom_pnm_pname)
    // var sStorage = sessionStorage.getItem('user')
    console.log(sessionStorage)
    console.log(sessionStorage.user)
    console.log(JSON.parse(sessionStorage.user).username)
    console.log(sessionStorage.user.username)
    console.log(this.prom.prom_pname)
    var headers = { headers: { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'mr' } }
    this.$http.post('http://192.168.0.237:2860/api/MRTest/MrInfo',
      {},
      headers
    ).then((response) => {
      console.log('created')
      this.tableHead = response
      // console.log(this.tableHead)
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  },
  mounted () {
    this.drawLine()
  }
}
</script>