const mrmenus = [
  {
    id: '0',
    icon: 'fa fa-microchip',
    label: 'mr项目管理',
    submenu: [
      { id: 'a1', name: 'mrinput', label: '解析数据', icon: 'el-icon-view' },
      { id: 'a2', name: 'mrdata', label: '数据呈现', icon: 'el-icon-view' },
      [
        '分析',
        [
          {
            id: 'b1',
            name: 'mrAnaOne',
            label: '一维分析',
            icon: 'el-icon-view'
          },
          {
            id: 'b2',
            name: 'mrAnaTwo',
            label: '二维分析',
            icon: 'el-icon-view'
          }
        ]
      ]
    ]
  }
]
export default mrmenus
