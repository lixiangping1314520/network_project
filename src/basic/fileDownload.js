// url: 'http://192.168.0.237:2860/api/FileDownn/Test',
// headers: { 'projectname': 'default', 'username': 'duhanxu', 'filetype': 'bulkcm' },
// filetype 的类型 分别是 neiGsm，neiLte，neiCell，bulkcm，kget
import Axios from 'axios'
function fileDownload (url, headers) {
  console.log('文件下载')
  console.log(url)
  Axios({
    method: 'get',
    url: url,
    headers: headers,
    responseType: 'arraybuffer'
  }).then(res => {
    let headers = res.headers
    let blob = new Blob([res.data], {
      type: headers['content-type']
    })
    let link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    const fileName = headers['content-disposition']
    var d = fileName.split(';')[1]
    var name = d.split('=')[1]
    link.download = name
    link.click()
  })
}
export default fileDownload
