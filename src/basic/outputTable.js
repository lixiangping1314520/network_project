function outputTable (tableData) {
  var header = []
  for (var key in tableData[0]) {
    header.push(key)
  }
  var contents = []
  contents.push(header)
  for (let i = 0; i < tableData.length; i++) {
    var content = []
    for (let item in tableData[i]) {
      content.push(tableData[i][item])
    }
    contents.push(content.join(','))
  }
  var stri = contents.join('\r\n')
  // encodeURIComponent解决中文乱码
  let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(stri)
  console.log(encodeURIComponent(uri))
  // 通过创建a标签实现
  var link = document.createElement('a')
  link.href = uri
  // console.log(link)
  // 对下载的文件命名
  link.download = 'json数据表.csv'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
export default outputTable

