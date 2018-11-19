import Vue from 'vue'
import Router from 'vue-router'

import AppView from '@/components/app-view'
import Home from '@/pages/home'
// import MrView from '@/pages/mr/mrview'

Vue.use(Router)

const page = name => () => import('@/pages/' + name)
const mr = name => () => import('@/pages/mr/' + name)
const pm = name => () => import('@/pages/pm/' + name)
const blk = name => () => import('@/pages/blk/' + name)
const kget = name => () => import('@/pages/kget/' + name)
const cmal = name => () => import('@/pages/cmal/' + name)
const neiplan = name => () => import('@/pages/neiplan/' + name)
const expansion = name => () => import('@/pages/expansion/' + name)
const prob = name => () => import('@/pages/netproblocation/' + name)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      component: AppView,
      children: [
        { path: '/', name: 'home', component: Home },
        {
          // 创建工程
          path: '/createproject',
          name: 'createproject',
          component: page('pro/createproject')
        },
        {
          // 工程管理
          path: '/projectmanage',
          name: 'projectmanage',
          component: page('pro/projectmanage')
        },
        {
          // mr模块
          path: '/mrside',
          name: 'mrside',
          redirect: '/mrside/mrinput',
          component: mr('mrside'),
          children: [
            {
              path: '/mrside/mrAnaOne',
              name: 'mrAnaOne',
              component: mr('mrAnaOne')
            },
            {
              path: '/mrside/mrAnaTwo',
              name: 'mrAnaTwo',
              component: mr('mrAnaTwo')
            },
            { path: '/mrside/mrdata', name: 'mrdata', component: mr('mrdata') },
            {
              path: '/mrside/mrinput',
              name: 'mrinput',
              component: mr('mrinput')
            }
          ]
        },
        {
          // pm 模块
          path: '/pmside',
          name: 'pmside',
          redirect: '/pmside/pminput',
          component: pm('pmside'),
          children: [
            {
              path: '/pmside/pminput',
              name: 'pminput',
              component: pm('pminput')
            },
            { path: '/pmside/pmdata', name: 'pmdata', component: pm('pmdata') },
            { path: '/pmside/pmkpi', name: 'pmkpi', component: pm('pmkpi') }
          ]
        },
        {
          // bulkcm 模块
          path: '/blkside',
          name: 'blkside',
          redirect: '/blkside/blkinput',
          component: blk('blkside'),
          children: [
            {
              path: '/blkside/blkinput',
              name: 'blkinput',
              component: blk('blkinput')
            },
            {
              path: '/blkside/blkdata',
              name: 'blkdata',
              component: blk('blkdata')
            },
            {
              path: '/blkside/blkcherk',
              name: 'blkcherk',
              component: blk('blkcherk')
            }
          ]
        },
        {
          path: '/kgetside',
          name: 'kgetside',
          redirect: '/kgetside/kgetinput',
          component: kget('kgetside'),
          children: [
            {
              path: '/kgetside/kgetinput',
              name: 'kgetinput',
              component: kget('kgetinput')
            },
            {
              path: '/kgetside/kgetdata',
              name: 'kgetdata',
              component: kget('kgetdata')
            },
            {
              path: '/kgetside/kgetcherk',
              name: 'kgetcherk',
              component: kget('kgetcherk')
            }
          ]
        },
        {
          // 工参表
          path: '/cmalside',
          name: 'cmalside',
          redirect: '/cmalside/cmalinput',
          component: cmal('cmalside'),
          children: [
            {
              path: '/cmalside/cmalinput',
              name: 'cmalinput',
              component: cmal('cmalinput')
            },
            {
              path: '/cmalside/cmaldata',
              name: 'cmaldata',
              component: cmal('cmaldata')
            }
          ]
        },
        {
          // 邻区规划
          path: '/neiplanside',
          name: 'neiplanside',
          redirect: '/neiplanside/neiplaninput',
          component: neiplan('neiplanside'),
          children: [
            {
              path: '/neiplanside/neiplaninput',
              name: 'neiplaninput',
              component: neiplan('neiplaninput')
            },
            {
              path: '/neiplanside/neiplandata',
              name: 'neiplandata',
              component: neiplan('neiplandata')
            }
          ]
        },
        {
          // 地理化呈现
          path: '/bmap',
          name: 'bmap',
          component: page('bmap/bmap')
        },
        {
          // 扩容
          path: '/expside',
          name: 'expside',
          redirect: '/expside/expinput',
          component: expansion('expside'),
          children: [
            {
              path: '/expside/expinput',
              name: 'expinput',
              component: expansion('expinput')
            },
            {
              path: '/expside/expdata',
              name: 'expdata',
              component: expansion('expdata')
            }
          ]
        },
        {
          // 网络问题定位
          path: '/netprob',
          name: 'netprob',
          component: prob('netprob')
        },
        { path: '/button', name: 'c-button', component: page('c-button') },
        { path: '/switch', name: 'c-switch', component: page('c-switch') },
        {
          path: '/checkbox',
          name: 'c-checkbox',
          component: page('c-checkbox')
        },
        { path: '/alert', name: 'c-alert', component: page('c-alert') },
        { path: '/input', name: 'c-input', component: page('c-input') },
        {
          path: '/keyboard',
          name: 'c-keyboard',
          component: page('c-keyboard')
        },
        { path: '/loading', name: 'c-loading', component: page('c-loading') },
        { path: '/data-table', name: 'p-data-table', component: page('table') },
        {
          path: '/dropdown',
          name: 'c-dropdown',
          component: page('c-dropdown')
        },
        { path: '/navbar', name: 'c-navbar', component: page('c-navbar') },
        {
          path: '/container',
          name: 'c-container',
          component: page('c-container')
        },
        { path: '/demo', name: 'demo', component: page('demo') },
        { path: '/404', name: '404', component: page('404') },
        { path: '/500', name: '500', component: page('500') },
        { path: '/test_du', name: 'test_du', component: page('test_du') }
      ]
    },
    { path: '/login', name: 'login', component: page('login') },
    { path: '/cnode', name: 'cnode', component: page('cnode') },
    // pages
    { path: '/home-login', name: 'p-login', component: page('home-login') },
    { path: '/register', name: 'p-register', component: page('register') },
    { path: '/resetPassWord', name: 'p-resetPassWord', component: page('resetPassWord') },
    { path: '/keyboard', name: 'p-keyboard', component: page('c-keyboard') },
    { path: '*', redirect: { name: '404' } }
  ]
})
