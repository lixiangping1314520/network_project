// import axios from 'axios'
const state = {
  prom_data_list: [],
  // 当前工程名称
  prom_pname: 'default1'
}

const mutations = {
  setData_prom (state, obj) {
    // for (let item of obj) {
    //   var json = {}
    //   json.id = parseInt(item['id'])
    //   json.label = item['name']
    //   state.prom_headerData.push(json)
    // }
    // state.playlist = JSON.parse(JSON.stringify(obj))
    // state.prom_headerData = Object.assign([], obj)
    state.prom_data_list = obj
    // state.prom_data_list = Object.assign([], obj)
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
  // getMrHeader: (state) => {
  //   console.log('这是 getMrHeader 函数')
  //   var pmhead = []
  //   var sStorage = sessionStorage.getItem('user')
  //   var headers = {headers: {'projectname': state.prom_pname, 'username': sStorage.username, 'filetype': 'mr'}}
  //   // this.$http.post('http://192.168.0.237:2861/api/MRTest/MrInfo',
  //   axios.post('http://192.168.0.237:2860/api/MRTest/MrInfo',
  //     {},
  //     headers
  //   ).then((response) => {
  //     pmhead = response
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  //   return pmhead
  // }
}

const actions = {
  async acSetData_prom ({ commit }, obj) {
    commit('setData_prom', obj)
  },
  async acSetpname_prom ({ commit }, obj) {
    commit('setpname_prom', obj)
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
