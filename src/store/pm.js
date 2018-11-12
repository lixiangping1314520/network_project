import sys3grbs from '@/pages/pm/sys3grbs.js'
import sys3grnc from '@/pages/pm/sys3grnc.js'
import sys4g from '@/pages/pm/sys4g.js'
import sysnbiot from '@/pages/pm//sysnbiot.js'
import kpi from '@/pages/pm//kpi.js'
const state = {
  pm_typeNow: '3g rnc',
  pm_kpivalues: []
}
const mutations = {
  setpm_typeNow (state, obj) {
    // '3g rnc' ''3g rnc' '4g' 'nbiot' 四种类型
    state.pm_typeNow = obj
  },
  setpm_kpivules: (state, kpiType) => {
    console.log('这是getpm_kpitypety 函数')
    console.log(kpiType)

    if (state.pm_typeNow === '3g rbs') {
      state.pm_kpivalues = kpi['3grbs']['3G']
    } else if (state.pm_typeNow === '3g rnc') {
      if (kpiType === '接入') {
        state.pm_kpivalues = kpi['3grnc']['Integrity']
      } else if (kpiType === '掉话') {
        state.pm_kpivalues = kpi['3grnc']['Mobility']
      } else if (kpiType === '切换') {
        state.pm_kpivalues = kpi['3grnc']['Retainability']
      } else {
        state.pm_kpivalues = kpi['3grnc']['Accessibility']
      }
    } else if (state.pm_typeNow === '4g') {
      state.pm_kpivalues = kpi['4g']['4G']
    } else {
      if (kpiType === '资源负荷') {
        state.pm_kpivalues = kpi['nbiot']['资源负荷']
      } else if (kpiType === '呼叫接入') {
        state.pm_kpivalues = kpi['nbiot']['呼叫接入']
      } else if (kpiType === '呼叫保持') {
        state.pm_kpivalues = kpi['nbiot']['呼叫保持']
      } else if (kpiType === '业务流量') {
        state.pm_kpivalues = kpi['nbiot']['业务流量']
      } else if (kpiType === '业务完成') {
        state.pm_kpivalues = kpi['nbiot']['业务完成']
      } else {
        state.pm_kpivalues = kpi['nbiot']['设备可用']
      }
    }
  }
}
const getters = {
  getpm_systable: state => {
    var thisvalue = []
    if (state.pm_typeNow === '3g rbs') {
      thisvalue = sys3grbs
    } else if (state.pm_typeNow === '3g rnc') {
      thisvalue = sys3grnc
    } else if (state.pm_typeNow === '4g') {
      thisvalue = sys4g
    } else {
      thisvalue = sysnbiot
    }
    return thisvalue
  },
  getpm_kpitypety: state => {
    var thisvalue = []
    if (state.pm_typeNow === '3g rbs') {
      thisvalue = [{ name: '3G' }]
    } else if (state.pm_typeNow === '3g rnc') {
      thisvalue = [
        { name: '接入' },
        { name: '掉话' },
        { name: '切换' },
        { name: '话务量' }
      ]
    } else if (state.pm_typeNow === '4g') {
      thisvalue = [{ name: '4G' }]
    } else {
      thisvalue = [
        { name: '资源负荷' },
        { name: '呼叫接入' },
        { name: '呼叫保持' },
        { name: '业务流量' },
        { name: '业务完成' },
        { name: '设备可用' }
      ]
    }
    return thisvalue
  }
}

export default {
  state,
  mutations,
  getters
}
