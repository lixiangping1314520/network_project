const pmmenus = [
  {
    id: '0',
    icon: 'fa fa-microchip',
    label: 'pm项目管理',
    submenu: [
      { id: 'a1', name: 'pminput', label: '解析数据', icon: 'el-icon-view' },
      { id: 'a2', name: 'pmdata', label: '数据呈现', icon: 'el-icon-view' },
      [
        '分析',
        [{ id: 'b1', name: 'pmkpi', label: 'kpi分析', icon: 'el-icon-view' }]
      ]
    ]
  }
]
export default pmmenus
