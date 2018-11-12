<template>
  <div class="fullscreen">
    <h2>创建项目</h2>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="项目名称">
        <el-input class="el-input" type="textarea" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="创建日期">
        {{form.createTime}}
      </el-form-item>
      <el-form-item label="最新修改日期">
        {{form.recentlyTime}}
      </el-form-item>
      <el-form-item label="备注">
        <el-input class="el-input" type="textarea" v-model="form.remarks"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    computed: {
      ...mapState({
        prom: (state) => state.prom,
        user: (state) => state.user
      })
    },
    data () {
      return {
        form: {
          name: '',
          createTime: new Date(),
          recentlyTime: new Date(),
          remarks: ''
        }
      }
    },
    //
    // created: function () {
    //   var date = new Date()
    //   this.form.datetime = date
    // },
    methods: {
      ...mapMutations(['addDate_prom']),
      onSubmit () {
        if (this.form.name === 'default') {
          this.$notify({
            title: '警告',
            message: '与公有项目的项目名称重复',
            type: 'warning'
          })
          return
        }
        const h = this.$createElement
        var parm = {id: '1', name: this.form.name, createTime: this.form.createTime, remarks: this.form.remarks, recentlyTime: this.form.recentlyTime}
        var heads = {headers: {'username': this.user.user.username}}
        if (this.form.name !== '') {
          this.$http.post('http://localhost:2860/api/ProManage/CreateProject',
            parm,
            heads
          ).then((response) => {
            if (response === 'success') {
              this.addDate_prom(parm)
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
            message: h('i', {style: 'color: teal'}, '请填写项目名名称')
          })
        }
      }
    }
  }
</script>

<style type="text/css">
  .fullscreen {
    border-color: rgb(20, 13, 13);
    text-align: center;
    /*让div内部文字居中*/
    background-color: rgb(250, 250, 250);
    border-radius: 20px;
    width: 500px;
    height: 600px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .el-input {
    width: 350px
  }

</style>
