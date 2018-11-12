import Vue from 'vue'
import Vuex from 'vuex'

import cnode from './cnode'
import user from './user'
import prom from './prom'
import pm from './pm'
import mr from './mr'

Vue.use(Vuex)

export default new Vuex.Store({
  // 关闭严格模式
  // strict: false,
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    cnode,
    user,
    prom,
    pm,
    mr
  }
})
