<template>
  <el-container>
    <el-form ref="form"
             :model="form"
             label-width="100px">
      <h2 style="text-align: center"> 创建项目</h2>
      <el-form-item label="项目名称">
        <el-input class="el-input"
                  type="textarea"
                  v-model="form.name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="创建日期">
        {{form.createTime}}
      </el-form-item>
      <el-form-item label="最新修改日期">
        {{form.recentlyTime}}
      </el-form-item> -->
      <el-form-item label="备注">
        <el-input class="el-input"
                  type="textarea"
                  v-model="form.remarks"></el-input>
      </el-form-item>
      <el-button type="primary"
                 style="margin-left:41%;"
                 size="mini"
                 @click="onSubmit">立即创建</el-button>
    </el-form>
    <!-- <el-dialog title="参数设置"
               :visible.sync="isShow"
               :close-on-click-modal="false"
               :append-to-body="atb_format">
      <div>
        我哪个去
      </div>
    </el-dialog> -->
  </el-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user
    })
  },
  data () {
    return {
      headers: {},
      form: {
        name: '',
        createTime: new Date(),
        recentlyTime: new Date(),
        remarks: ''
      },
      isShow: true
    }
  },
  created: function () {
    console.log(' 创建工程 created')
    console.log(document.cookie)
    this.headers = { headers: { 'username': JSON.parse(sessionStorage.user).username } }
    console.log(this.headers)
  },
  methods: {
    onSubmit () {
      const pattern = /^[a-zA-Z0-9\u4e00-\u9fa5]{2,20}$/
      if (!pattern.test(this.form.name)) {
        this.$notify({
          title: '警告',
          message: '项目名称设置错误',
          type: 'warning'
        })
        return
      }
      if (this.form.name === 'default') {
        this.$notify({
          title: '警告',
          message: '与公有项目的项目名称重复',
          type: 'warning'
        })
        return
      }
      const h = this.$createElement
      var parm = { id: '1', name: this.form.name, createTime: this.form.createTime, remarks: this.form.remarks, recentlyTime: this.form.recentlyTime }
      if (this.form.name !== '') {
        this.$http.post(this.user.httppath + '/api/ProManage/CreateProject',
          parm,
          this.headers
        ).then((response) => {
          if (response === 'success') {
            // this.addDate_prom(parm)
            this.$notify({
              title: '成功',
              message: '创建项目成功: ' + this.form.name,
              type: 'success'
            })
          } else {
            this.$notify({
              title: '警告',
              message: '项目名称已经存在',
              type: 'warning'
            })
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        this.$notify.info({
          title: '提示',
          message: h('i', { style: 'color: teal' }, '请填写项目名名称')
        })
      }
    }
  }
}
</script>

<style type="text/css">
.fullscreen {
  /* border-style: ridge; */
  /* margin-top: 1%;
  margin-left: 38%; */
  width: 500px;
}
.el-input {
  width: 350px;
}
.elmro {
  text-align: center;
}
</style>
