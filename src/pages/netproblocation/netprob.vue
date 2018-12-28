<template>
  <div style="padding-left:10px;">
    <!-- <div>参数 设置 </div> -->
    <br>
    <el-dialog title="参数设置"
               :visible.sync="dialogVisible"
               :close-on-click-modal="false"
               :append-to-body="atb_format"
               :before-close="before_cherk">
      <el-menu :default-active="activeIndex"
               mode="horizontal"
               text-color="black"
               active-text-color="#409EFF"
               style="text-align:center; "
               @select="handleSelect">
        <el-menu-item index="1">过覆盖</el-menu-item>
        <el-menu-item index="2">弱覆盖</el-menu-item>
      </el-menu>
      <div v-if="ptype === 'overCoverage'">
        <label> 门限:</label>
        <input placeholder="请输入数字"
               v-model="form.overCoverage.threshold"
               @change="negNumber(form.overCoverage.threshold,true)">
        <br>
        <br>
        <label>占比:</label>
        <input placeholder="请输入数字"
               v-model="form.overCoverage.persent"
               @change="numberRange(form.overCoverage.persent,true)">
        <label>%</label>
      </div>
      <div v-else="ptype === 'poorCoverage'">
        <label>门限:</label>
        <input placeholder="请输入数字"
               v-model="form.poorCoverage.threshold"
               @change="negNumber(form.poorCoverage.threshold,true)">
        <br>
        <br>
        <label>占比:</label>
        <input placeholder="请输入数字"
               v-model="form.poorCoverage.persent"
               @change="numberRange(form.poorCoverage.persent,true)">
        <label>%</label>
      </div>
    </el-dialog>
    <el-button type="primary"
               size="mini"
               style="width:80px"
               @click="parconfig">参数设置</el-button>
    <el-button type="primary"
               :loading="isloading"
               size="mini"
               style="width:80px; margin-left:2px"
               @click="analysis">解析</el-button>
    <v-exportTable style="margin-left:2px"
                   :tableData="oneTable"></v-exportTable>
    <el-form :inline="true"
             class="demo-form-inline"
             style="margin-top: 10px">
      <el-form-item style="margin-bottom: 10px">
        <el-select v-model="tableName"
                   size="mini"
                   placeholder="表名称"
                   @change="changeTableName"
                   style="width:200px">
          <el-option v-for="item in resultTableName"
                     :key="item.tableName"
                     :label="item.tableName"
                     :value="item.tableName">{{item.tableName}}</el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <v-pageTable :tableData="oneTable"> </v-pageTable>
  </div>
</template>
<style>
.duh {
  border-style: solid;
  border-width: 1px;
}
</style>
<script>
import { mapState, mapMutations } from 'vuex'
import exportTable from '../../basic/exportTable'
import pageTable from '../../basic/pageTable.vue'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      users: (state) => state.user
    })
  },
  components: {
    'v-exportTable': exportTable,
    'v-pageTable': pageTable
  },
  data () {
    return {
      head: {},
      ptype: '',
      atb_format: false,
      dialogVisible: false, // 是否呈现弹出框
      activeIndex: '2',
      // activeName: 'overCoverage',
      legitimat: true,
      form: {
        overCoverage: {
          persent: '',
          threshold: ''
        },
        poorCoverage: {
          persent: '',
          threshold: ''
        }
      },
      resultTable: {}, // 获取的dataset
      resultTableName: [], // 格式 [{ 'tableName': '错误信息表' }, { 'tableName': '核查结果表' }],
      oneTable: [], // 结果表
      tableName: '', // 当前表名称
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
    // this.activeName = 'poorCoverage'
    this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'location' }
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    parconfig () {
      this.dialogVisible = true
    },
    analysis () {
      console.log(this.cherk(this.form))
      console.log(this.legitimat)
      if (!this.cherk(this.form) || !this.legitimat) {
        this.$notify({
          title: '警告',
          message: '参数未设置或参数设置有误',
          type: 'warning'
        })
        return
      }
      console.log(this.form)
      this.isloading = true
      this.$http.post(this.users.httppath + '/api/Locproblem/GetProblem',
        this.form,
        { headers: this.head }
      ).then((response) => {
        console.log('函数 processbar 响应')
        console.log(response)
        this.resultTable = response
        this.resultTableName = []
        if (response.length !== 0) {
          for (let key in response) {
            var t = []
            t['tableName'] = key
            this.resultTableName.push(t)
          }
        }
        this.isloading = false
        this.$notify({
          title: '成功',
          message: '解析成功',
          type: 'success'
        })
      }).catch((error) => {
        console.log('函数 processbar 响应 失败')
        console.log('error')
        this.isloading = false
        this.$notify({
          title: '警告',
          message: error,
          type: 'warning'
        })
        console.log(error)
      })
    },
    // handleClick (tab, event) {
    //   console.log('这是 handleClick 函数')
    //   var index = tab.$vnode.child.index
    //   console.log(index)
    //   if (index === '0') {
    //     this.ptype = 'overCoverage'
    //   } else {
    //     this.ptype = 'poorCoverage'
    //   }
    // },
    changeTableName () {
      //
      if (Object.keys(this.resultTable).length !== 0) {
        if (this.tableName.length === 0) {
          this.oneTable = {}
        } else {
          var tabl = []
          var b = this.resultTable[this.tableName]
          console.log(b)
          for (let key in b) {
            var t = []
            t['id'] = key
            t['cell'] = b[key]
            tabl.push(t)
          }
          this.oneTable = tabl
        }
      }
    },
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.ptype = 'overCoverage'
      } else {
        this.ptype = 'poorCoverage'
      }
    },
    before_cherk (down) {
      if (!this.cherk(this.form) || !this.legitimat) {
        this.$notify({
          title: '警告',
          message: '参数未设置或参数设置有误',
          type: 'warning'
        })
        this.$confirm('是否关闭该窗口?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          down()
        }).catch(() => {
        })
      } else {
        down()
      }
    },
    cherk (val) {
      for (let key in val) {
        var t = val[key]
        for (let key2 in t) {
          if (t[key2].length === 0) {
            return false
          }
        }
      }
      var a = this.numberRange(this.form.poorCoverage.persent, false)
      var b = this.numberRange(this.form.overCoverage.persent, false)
      var c = this.negNumber(this.form.poorCoverage.threshold, false)
      var d = this.negNumber(this.form.overCoverage.threshold, false)
      if (a && b && c && d) {
        return true
      } else {
        return false
      }
    },
    numberRange (value, isShowNotify) { // 测试范围是否时0-100
      if (this.numberT(value)) {
        var num = parseFloat(value)
        if (num > 100 || num < 0) {
          if (isShowNotify) {
            this.$notify({
              title: '警告',
              message: '范围:0-100',
              type: 'warning'
            })
          }
          this.legitimat = false
          return false
        } else {
          this.legitimat = true
          return true
        }
      }
    },
    negNumber (value, isShowNotify) {
      if (this.numberT(value)) {
        var num = parseFloat(value)
        if (num >= 0) {
          if (isShowNotify) {
            this.$notify({
              title: '警告',
              message: '参数应该为负数',
              type: 'warning'
            })
          }
          this.legitimat = false
          return false
        } else {
          this.legitimat = true
          return true
        }
      }
    },
    numberT (value, isShowNotify) {
      if (value === '') { return }
      if (isNaN(value)) {
        if (isShowNotify) {
          this.$notify({
            title: '警告',
            message: '不是数字',
            type: 'warning'
          })
        }
        this.legitimat = false
        return false
      }
      this.legitimat = true
      return true
    }
  }
}
</script>