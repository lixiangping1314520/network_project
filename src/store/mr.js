import axios from 'axios'
const state = {
  mrhead: []
}
const mutations = {
  setMrHeader: state => {
    console.log('这是 路由 getMrHeader 函数')
    // var pmhead = []
    var sStorage = sessionStorage.getItem('user')
    var headers = {
      headers: {
        projectname: state.prom_pname,
        username: sStorage.username,
        filetype: 'mr'
      }
    }
    // this.$http.post('http://192.168.0.237:2861/api/MRTest/MrInfo',
    axios
      .post('http://192.168.0.237:2860/api/MRTest/MrInfo', {}, headers)
      .then(response => {
        state.mrhead = response
        console.log('成功' + response)
      })
      .catch(error => {
        console.log(error)
      })
    // return pmhead
  }
}
export default {
  state,
  mutations
}
