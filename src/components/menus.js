const menus = [
  {
    id: '0',
    icon: 'fa fa-microchip',
    label: '项目管理',
    submenu: [
      {id: 'z1', name: 'createproject', label: '创建项目', icon: 'el-icon-view'},
      {id: 'z2', name: 'projectmanage', label: '切换项目', icon: 'el-icon-view'}
    ]
  },
  {
    id: '1',
    icon: 'fa fa-microchip',
    label: '数据管理',
    submenu: [
      {id: 'a1', name: 'mrside', label: 'mr', icon: 'el-icon-view'},
      {id: 'a2', name: 'pmside', label: 'pm', icon: 'el-icon-view'},
      {id: 'a3', name: 'blkside', label: 'bulkcm', icon: 'el-icon-view'},
      {id: 'a4', name: 'kgetside', label: 'kget', icon: 'el-icon-view'},
      {id: 'a5', name: 'cmalside', label: '工参表', icon: 'el-icon-view'}
    ]
  },
  {
    id: '2',
    icon: 'fa fa-microchip',
    label: '网络规划',
    submenu: [
      {id: 'b1', name: 'neiplan', label: '邻区规划', icon: 'el-icon-date'},
      {id: 'b2', name: 'bmap', label: '地理化呈现', icon: 'el-icon-date'}
    ]
  },
  {
    id: '3',
    icon: 'fa fa-microchip',
    label: '网络设计',
    submenu: [
      {id: 'c1', name: 'c-input', label: '网络设计1', icon: 'el-icon-date'},
      {id: 'c2', name: 'c-button', label: '网络设计2', icon: 'el-icon-date'}
    ]
  },
  {
    id: '4',
    icon: 'fa fa-microchip',
    label: '网络优化',
    submenu: [
      {id: 'c1', name: 'expansion', label: '扩容', icon: 'el-icon-date'},
      {id: 'c2', name: 'netprob', label: '网络问题定位', icon: 'el-icon-date'}
    ]
  }
]
export default menus

/* const menus = [
  {id: '0', label: '控制面板', path: '/', icon: 'fa fa-dashboard'},
  {
    id: 'components',
    icon: 'fa fa-microchip',
    label: '组件',
    submenu: [
      {
        id: 'test',
        label: '二级测试',
        icon: 'fa fa-hand-o-up',
        submenu: [
          {
            id: 'test',
            label: '二级测试',
            icon: 'fa fa-hand-o-up'
          }
        ]
      },
      ['Form 表单', [
        {id: 'f1', name: 'c-button', label: 'Button 按钮', icon: 'fa fa-hand-o-up'},
        {id: 'f2', name: 'c-switch', label: 'Switch 开关', icon: 'fa fa-square-o'},
        {id: 'f3', name: 'c-checkbox', label: 'Checkbox 多选框', icon: 'fa fa-check-square'},
        // {id: 'f4', label: 'Radio 单选框', icon: 'fa fa-dot-circle-o'},
        {id: 'f5', name: 'c-input', label: 'Input 输入框', icon: 'fa fa-pencil'},
        {id: 'f6', name: 'c-keyboard', label: '虚拟键盘', icon: 'fa fa-keyboard-o'}
      ]],
      ['Notice', [
        {id: 'n1', name: 'c-alert', label: 'Alert 警告', icon: 'fa fa-info'},
        {id: 'n2', name: 'c-loading', label: 'Loading 加载', icon: 'fa fa-circle-o-notch'}
      ]],
      ['Other', [
        {id: 'c-dropdown', name: 'c-dropdown', label: 'Dropdown'},
        {id: 'c-navbar', name: 'c-navbar', label: 'Navbar'},
        {id: 'c-container', name: 'c-container', label: '栅格布局'}
      ]]
    ]
  },
  {
    id: 'pages',
    icon: 'fa fa-circle-o',
    label: 'Pages 页面',
    submenu: [
      {id: 'p-data-table', name: 'p-data-table', label: 'Table 表格数据'},
      {id: 'cnode', name: 'cnode', label: 'Cnode社区'},
      {id: 'p1', name: 'login', label: 'Login 登录'},
      {id: 'p2', name: 'p-login', label: 'Login 登录2'},
      {id: 'p3', name: 'p-register', label: 'Register 注册'},
      {id: '400', path: '/404', label: '404'},
      {id: '500', path: '/500', label: '500'},
      {id: 'test_du', path: '/test_du', label: '我的测试'}
    ]
  },
  {
    id: 'examples',
    icon: 'fa fa-paper-plane',
    label: 'Examples',
    submenu: [
      {id: 'e1', path: '/500', label: 'Vuex 例子'}
    ]
  },
  {
    id: 'version',
    icon: 'fa fa-meetup',
    label: '应用'
  }
] */

