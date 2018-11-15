<template>
	<div class="output-table">
		<el-button type="primary" size="mini" :loading="isloading" :disabled="isOutputTable" @click.prevent="outputTable">导出</el-button>
	</div>
</template>
<script type="text/javascript">
export default {
  props: {
    tableData: {
      type: Array,
      default: []
    }
  },
  methods: {
    outputTable () {
      let header = []
      for (let key in this.tableData[0]) {
        header.push(key)
      }
      let contents = []
      contents.push(header)
      for (let i = 0; i < this.tableData.length; i++) {
        let content = []
        for (let item in this.tableData[i]) {
          content.push(this.tableData[i][item])
        }
        contents.push(content.join(','))
      }
      let stri = contents.join('\r\n')
      // encodeURIComponent解决中文乱码
      let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(stri)
      console.log(encodeURIComponent(uri))
      // 通过创建a标签实现
      let link = document.createElement('a')
      link.href = uri
      // console.log(link)
      // 对下载的文件命名
      link.download = 'json数据表.csv'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  },
  computed: {
    isOutputTable () {
      return !this.tableData.length
    }
  }
}
</script>

<style type="text/css">
	.output-table{
		float: right;
  }
</style>