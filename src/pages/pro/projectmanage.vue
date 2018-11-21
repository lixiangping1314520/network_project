<template>
  <div>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-tree class="filter-tree"
                   :data="getHeaderDate"
                   :props="defaultProps"
                   default-expand-all
                   :filter-node-method="filterNode"
                   @node-click="handleNodeClick">
            ref="tree2">
          </el-tree>
        </el-aside>
        <el-container>
          <el-form ref="form"
                   :model="form"
                   label-width="100px">
            <h2 style="text-align: center">编辑</h2>
            <el-form-item label="项目名称">
              <el-input class="el-input"
                        type="textarea"
                        v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="日期">
              {{form.createTime}}
            </el-form-item>
            <el-form-item label="最新修改日期">
              {{form.recentlyTime}}
            </el-form-item>
            <el-form-item label="备注">
              <el-input class="el-input"
                        type="textarea"
                        v-model="form.remarks"></el-input>
            </el-form-item>
            <el-button style="margin-left:38%;"
                       type="primary"
                       size="mini"
                       @click="update">修改</el-button>
            <el-button type="primary"
                       size="mini"
                       @click="deletepro">删除</el-button>

          </el-form>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user
    }),
    ...mapGetters(['getHeaderDate'])
  },
  data () {
    return {
      data_list: [],
      data_list2: [{ 'id': '1', 'name': 'duhanxu' }, { 'id': '2', 'name': 'hedajuan' }, { 'id': '3', 'name': 'duhanxu' }, { 'id': '4', 'name': 'hedajuan' }],
      headerData: [],
      headerData2: [{ id: 10, label: '工程1' }],
      defaultProps: {
        children: 'id',
        label: 'label'
      },
      form: {
        id: 0,
        name: '',
        createTime: new Date(),
        recentlyTime: new Date(),
        remarks: ''
      }
    }
  },
  created () {
    this.load()
  },
  methods: {
    ...mapMutations(['setData_prom', 'updateData_prom', 'deleteDate_prom', 'setpname_prom', 'updataStateProm']),
    ...mapActions(['acSetData_prom', 'acSetpname_prom']),
    handleNodeClick (data) {
      for (let item of this.prom.prom_data_list) {
        if (data.id === parseInt(item['id'])) {
          this.form.id = item['id']
          this.form.name = item['name']
          this.form.createTime = item['createTime']
          this.form.recentlyTime = item['recentlyTime']
          this.form.remarks = item['remarks']
          this.acSetpname_prom(this.form.name)
          sessionStorage.setItem('pname', this.form.name)
        }
      }
      this.$notify({
        title: '成功',
        message: '选中项目: ' + this.form.name,
        type: 'success'
      })
      // console.log(data)
    },
    filterNode (value, data) {
      if (!value) return true
      console.log(value)
      console.log(data)
      return data.label.indexOf(value) !== -1
    },
    update () {
      if (this.form.name === 'default') {
        this.$notify({
          title: '警告',
          message: '公共工程不能修改',
          type: 'warning'
        })
        return
      }
      for (let item of this.prom.prom_data_list) {
        if (item['name'] === this.form.name && item['id'] !== this.form.id) {
          this.$notify({
            title: '警告',
            message: '项目名称已经存在',
            type: 'warning'
          })
          return
        }
      }
      var heads = { headers: { 'username': this.user.user.username } }
      var parm = { id: this.form.id, name: this.form.name, createTime: this.form.createTime, remarks: this.form.remarks, recentlyTime: this.form.recentlyTime }
      this.$http.post(this.user.httppath + '/api/ProManage/UpdateProject',
        parm,
        heads
      ).then((response) => {
        if (response === 'success') {
          this.updateData_prom(parm)
          this.setpname_prom(this.form.name)
          sessionStorage.setItem('pname', this.form.name)
          this.$notify({
            title: '成功',
            message: '修改项目成功: ' + this.form.name,
            type: 'success'
          })
        }
      }).catch((error) => {
        this.$notify({
          title: '警告',
          message: error,
          type: 'warning'
        })
      })
    },
    deletepro () {
      console.log('这是删除函数')
      if (this.form.name === 'default') {
        this.$notify({
          title: '警告',
          message: '不能删除公有工程',
          type: 'warning'
        })
        return
      }
      var parm = { id: this.form.id }
      var id = this.form.id.toString()
      var head = { 'projectname': this.prom.prom_pname, 'username': JSON.parse(sessionStorage.user).username }
      this.$http.post(this.user.httppath + '/api/ProManage/DeleteProject',
        parm,
        {headers: head}
      ).then((response) => {
        if (response === 'success') {
          this.deleteDate_prom(id)
          this.setpname_prom('')
          this.$notify({
            title: '成功',
            message: '项目删除成功: ' + this.form.name,
            type: 'success'
          })
          this.acSetpname_prom('default')
          this.form.id = '-1'
          this.form.name = 'default'
          sessionStorage.setItem('pname', 'default')
        }
      }).catch((error) => {
        this.$notify({
          title: '警告',
          message: error,
          type: 'warning'
        })
      })
    },
    load () {
      var heads = { headers: { 'username': JSON.parse(sessionStorage.user).username } }
      this.$http.post(this.user.httppath + '/api/ProManage/GetALlProject',
        {},
        heads
      ).then((response) => {
        this.acSetData_prom(response)
        this.form.id = '-1'
        this.form.name = 'default'
      }).catch((error) => {
        this.$notify.info({
          title: '提示',
          message: '没有相关工程'
        })
        console.log(error)
      })
    }

  }
}
</script>

<style>
.el-header {
  background-color: rgb(250, 250, 250);
  color: #333;
  line-height: 60px;
}
.fullscreen {
  border-style: ridge;
  margin-top: 1%;
  margin-left: 30%;
  width: 500px;
  height: 400px;
}
.el-aside {
  color: #333;
}
</style>
