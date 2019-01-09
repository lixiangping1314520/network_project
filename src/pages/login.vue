<template>
  <div class="fullscreen"
       style="margin-left: 0px;">
    <div class="login-box">
      <div style="text-align: center">
        <img src="../assets/logo.png"
             alt=""
             class="logo">
      </div>
      <p class="text-tips-header">你好，欢迎登录</p>
      <form action=""
            class="login-form">
        <div class="m-list-group">
          <div class="m-list-group-item">
            <label for="username"
                   class="m-label">用户名称</label><input type="text"
                   placeholder="登录用户名,2-10个字符"
                   class="m-input"
                   v-model="username">
          </div>
          <div class="m-list-group-item">
            <label for="username"
                   class="m-label">密&nbsp;&nbsp;&nbsp;&nbsp;码</label><input type="password"
                   placeholder="必须包含字母、数字,长度不小于8位"
                   class="m-input"
                   v-model="password">
          </div>
        </div>
        <div class="m-btn-box">
          <button class="m-btn sub select-none"
                  @click.prevent="handleLogin"
                  v-loading="isLoging">登录</button>
        </div>
      </form>
      <p class="text-tips">没有有账号？</p>
      <a @click.prevent="goRegister"
         class="m-btn m-btn-text">快速注册</a>
      <!-- <p class="text-tips">
      <i class="fa fa-meetup" style="color: #29ABE2"></i>&nbsp;
      <span class="footer-text">{{appName}} &nbsp;<el-tag size="mini">{{version}}</el-tag> <br>©make by <a href="https://www.github.com/mengdu" target="_blank">{{author}}</a>
      </span>
    </p> -->
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'login',
  computed: {
    ...mapState({
      prom: (state) => state.prom,
      user: (state) => state.user
    })
  },
  data () {
    return {
      username: '',
      password: '',
      isLoging: false,
      author: window.APP_INFO.author,
      version: window.APP_INFO.version,
      appName: window.APP_INFO.appName
    }
  },
  methods: {
    ...mapActions(['login']),
    ...mapMutations(['sethttppath']),
    handleLogin () {
      if (!this.username || !this.password) {
        this.$notify({
          title: '警告',
          message: '用户名和密码不能为空',
          type: 'warning'
        })
        return
      }
      // 后台获取登录信息
      let loginUser = {
        username: this.username,
        password: this.password
      }
      // this.login({
      //   username: this.username,
      //   password: this.password,
      //   ticket: 'asdaasdadad'
      // })
      // this.$notify({
      //   title: '成功',
      //   message: '登陆成功',
      //   type: 'success'
      // })
      // this.$router.push({ name: 'home' })
      // 判断密码和名字是否正确与一致
      // let users = this.$store.state.user.regisiterUser
      // users.forEach((userItem) => {
      //   if (userItem.username === this.username && userItem.password === this.password) {
      //     this.login({
      //       username: this.username,
      //       password: this.password
      //     })
      //     this.$message.success('登录成功')
      //     this.$router.push({name: 'home'})
      //   }
      // })

      console.log(this.user.httppath)
      this.$http.post(this.user.httppath + '/api/WebUser/Login', loginUser).then(res => {
        console.log(res)
        if (res === '不存在该用户') {
          this.$notify({
            title: '警告',
            message: '不存在该用户',
            type: 'warning'
          })
        } else if (res === '密码不正确，请重新输入') {
          this.$notify({
            title: '警告',
            message: '密码输入错误',
            type: 'warning'
          })
        } else {
          sessionStorage.setItem('pname', 'default')
          console.log(res)
          this.login({
            username: this.username,
            password: this.password,
            ticket: res.ticket
          })
          this.$message.success('登录成功')
          this.$router.push({ name: 'home' })
        }
      })
    },
    goRegister () {
      this.$router.push({ name: 'p-register' })
    }
  },
  created () {
    // this.$http.post('http://132.232.239.97:8080/getServerIpById?id=1', {})
    //   .then(response => {
    //     console.log('ceshi')
    //     console.log(response)
    //   }).catch(error => {
    //     this.httppath = 'http://119.4.177.220:8081/'
    //     console.log(error)
    //   })

    // console.log('asdasd')
    // console.log(config.name)
    // 给http 赋值
    // this.sethttppath('asd')
  }
}
</script>
<style type="text/css">
.m-list-group {
  padding: 0;
  margin: 0 0 20px;
}
.m-list-group .m-list-group-item {
  position: relative;
  display: block;
  margin-bottom: -1px;
  background-color: transparent;
  margin-top: 10px;
}
.fullscreen {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f4f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-left-width: 0px;
  margin-left: 0px; */
}
.login-box {
  position: relative;
  width: 400px;
  margin: 0 auto;
  padding: 0px 15px;
}
.login-box .logo {
  max-width: 40%;
  margin-bottom: 30px;
}
.login-box .text-tips-header {
  width: 100%;
  text-align: center;
  color: #909db7;
  display: inline-block;
  font-size: 14px;
}
.login-box .text-tips {
  text-align: center;
  color: #909db7;
  display: inline-block;
  width: 50%;
  font-size: 14px;
}
.login-box .m-label {
  display: inline-block;
  width: 20%;
  font-size: 14px;
}
.login-box .m-input {
  width: 80%;
  padding: 10px;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #e7ecee;
  display: inline-block;
  border-radius: 5px;
  font-size: 14px;
}
.login-box .m-btn {
  font-size: 18px;
  width: 100%;
  color: #fff;
  background-color: #1bbd70;
  display: inline-block;
  padding: 10px 12px;
  margin-bottom: 5px;
  line-height: 1.42857143;
  text-align: center;
  cursor: pointer;
  outline: none;
  border-radius: 2px;
  border: 1px solid #1bbd70;
  box-sizing: border-box;
  text-decoration: none;
}
.login-box .m-btn.m-btn-text {
  display: inline-block;
  background: #fff;
  color: #1bbd70;
  padding: 5px;
  font-size: 16px;
  width: 40%;
}
.login-box .m-btn.m-btn-text:hover {
  background-color: #f4f5f5;
}
.login-box .m-btn:active {
  opacity: 0.8;
}
@media (max-width: 768px) {
  .login-box {
    width: auto;
  }
}
</style>
