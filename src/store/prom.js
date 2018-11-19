// import axios from 'axios'
const state = {
  prom_data_list: [],
  // 当前工程名称
  prom_pname: 'default'
}

const mutations = {
  setData_prom (state, obj) {
    state.prom_data_list = obj
  },
  setpname_prom (state, obj) {
    state.prom_pname = obj
  },
  updateData_prom (state, obj) {
    console.log('这是updateData_prom')
    var id = obj['id'].toString()
    for (let item of state.prom_data_list) {
      if (id === item.id) {
        item.name = obj.name
        item.createTime = obj.createTime
        item.recentlyTime = obj.recentlyTime
        item.remarks = obj.remarks
      }
    }
  },
  addDate_prom (state, obj) {
    state.prom_data_list.push(obj)
  },
  deleteDate_prom (state, index) {
    console.log('这是deleteDate_prom')
    var a = 0
    for (var i = 0; i < state.prom_data_list.length; i++) {
      if (state.prom_data_list[i]['id'] === index) {
        a = i
        break
      }
    }
    state.prom_data_list.splice(a, 1)
  }
}

const getters = {
  getHeaderDate: state => {
    var headerData = []
    for (let item of state.prom_data_list) {
      var json = {}
      json.id = parseInt(item['id'])
      json.label = item['name']
      headerData.push(json)
    }
    return headerData
  }
}

const actions = {
  async acSetData_prom ({ commit }, obj) {
    commit('setData_prom', obj)
  },
  async acSetpname_prom ({ commit }, obj) {
    // console.log('这是 工程名称函数')
    // console.log(obj)
    // sessionStorage.removeItem('pname')
    // sessionStorage.setItem('pname', JSON.stringify(obj))
    // console.log(sessionStorage.getItem('pname'))
    commit('setpname_prom', obj)
    // console.log('这是 工程名称函数 结束')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
