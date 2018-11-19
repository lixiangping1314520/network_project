<template>
  <div>
    <div>参数 设置 </div>
    <el-tabs v-model="activeName"
             type="card"
             @tab-click="handleClick">
      <el-tab-pane label="过覆盖"
                   name="first">过覆盖</el-tab-pane>
      <el-tab-pane label="弱覆盖"
                   name="second">弱覆盖</el-tab-pane>
    </el-tabs>
    <div v-if="ptype === 'small'">
      <label> 门限:</label>
      <input placeholder="请输入数字"
             v-model="form.smallThreshold"
             @change="negNumber(form.smallThreshold)">
      <br>
      <br>
      <label>占比:</label>
      <input placeholder="请输入数字"
             v-model="form.smallProportion"
             @change="numberRange(form.smallProportion)">
      <label>%</label>
    </div>
    <div v-else="ptype === 'surplus'">
      <label> 门限:</label>
      <input placeholder="请输入数字"
             v-model="form.surplusThreshold"
             @change="negNumber(form.surplusThreshold)">
      <br>
      <br>
      <label>占比:</label>
      <input placeholder="请输入数字"
             v-model="form.surplusProportion"
             @change="numberRange(form.surplusProportion)">
      <label>%</label>
    </div>

  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      users: (state) => state.user
    })
  },
  data () {
    return {
      head: {},
      ptype: '',
      duaactiveName: 'first',
      legitimat: true,
      form: {
        distance_indoor: '',
        smallThreshold: '',
        smallProportion: '',
        surplusThreshold: '',
        surplusProportion: ''
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
    this.head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username, 'filetype': 'neipaln' }
  },
  methods: {
    ...mapMutations(['setpname_prom']),
    handleClick (tab, event) {
      console.log('这是 handleClick 函数')
      var index = tab.$vnode.child.index
      console.log(index)
      if (index === '0') {
        this.ptype = 'small'
      } else {
        this.ptype = 'surplus'
      }
    },
    numberRange (value) {
      if (this.numberT(value)) {
        var num = parseFloat(value)
        if (num > 100 || num < 0) {
          this.$notify({
            title: '警告',
            message: '范围是0-100',
            type: 'warning'
          })
          this.legitimat = false
        } else {
          this.legitimat = true
        }
      }
    },
    negNumber (value) {
      if (this.numberT(value)) {
        var num = parseFloat(value)
        if (num >= 0) {
          this.$notify({
            title: '警告',
            message: '参数应该为负数',
            type: 'warning'
          })
          this.legitimat = false
        } else {
          this.legitimat = true
        }
      }
    },
    numberT (value) {
      if (value === '') { return }
      if (isNaN(value)) {
        this.$notify({
          title: '警告',
          message: '不是数字',
          type: 'warning'
        })
        this.legitimat = false
        return false
      }
      this.legitimat = true
      return true
    }
  }
}
</script>