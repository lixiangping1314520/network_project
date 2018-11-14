<template>
  <div class="fullscreen">
    <div class="register-box">
      <div style="text-align: center">
        <img src="../assets/logo.png"
             alt=""
             class="logo">
      </div>
      <p class="text-tips-header">你好，欢迎注册</p>
      <form action=""
            class="login-form">
        <div class="m-list-group">
          <div class="m-list-group-item">
            <label for="username"
                   class="m-label">用户名称</label><input type="text"
                   placeholder="登录用户名,2-10个字符"
                   class="m-input"
                   v-model="username"
                   @blur="ueserNamePattern">
          </div>
          <div class="m-list-group-item">
            <label for="username"
                   class="m-label">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</label><input type="email"
                   placeholder="E-mail"
                   class="m-input"
                   v-model="email"
                   @blur="emailPattern">
          </div>
          <div class="m-list-group-item">
            <label for="username"
                   class="m-label">密&nbsp;&nbsp;&nbsp;&nbsp;码</label><input type="password"
                   placeholder="必须包含字母、数字,长度不小于8位"
                   class="m-input"
                   v-model="password"
                   @blur="passwordPattern">
          </div>
          <div class="m-list-group-item">
            <label for="username"
                   class="m-label">确认密码</label><input type="password"
                   placeholder="请确认密码"
                   class="m-input"
                   v-model="confirmPassword"
                   @blur="passwordPattern">
          </div>

        </div>
        <button class="m-btn sub select-none"
                @click.prevent="handregister">注册</button>
        <p class="text-tips">已经有账号？</p>
        <a href="/login"
           class="m-btn m-btn-text">直接登陆</a>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    // 判断用户名
    ueserNamePattern () {
      const pattern = /^[a-zA-Z\u4e00-\u9fa5]{2,10}$/
      if (pattern.test(this.username) || !this.username) {
        return true
      } else if (!this.username) {
        return false
      }
      this.$message.warning('用户名为2-10个字符')
      return false
    },
    // 判断密码
    passwordPattern () {
      const pattern = /[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/
      if (pattern.test(this.password) || !this.password) {
        return true
      } else if (!this.password) {
        return false
      }
      this.$message.warning('密码必须为字母加数字且长度不小于8位')
      return false
    },
    // 判断邮箱格式
    emailPattern () {
      const pattern = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/
      if (pattern.test(this.email)) {
        return true
      } else if (!this.email) {
        return false
      }
      this.$message.warning('请输入正确的邮箱')
      return false
    },
    ...mapActions(['register']),
    // 注册
    handregister () {
      // 两次输入的密码是否一致
      if (this.confirmPassword !== this.password) {
        return this.$message.warning('两次输入的密码不一致')
      }
      // 信息填写是否正确完善
      if (!this.ueserNamePattern() || !this.emailPattern() || !this.passwordPattern()) {
        return this.$message.warning('请完整正确填写注册信息')
      }
      // 所有信息填写正确后
      // 将用户信息post至后台
      let userMessage = {
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
        email: this.email
      }
      this.$http.post('http://192.168.0.237:2860/api/WebUser/Register', userMessage).then(res => {
        if (res === '已经存在该用户名') {
          return this.$message.warning('用户名已存在')
        }
<<<<<<< .mine
        if (res === '该邮箱已被注册') {
          return this.$message.warning('该邮箱已被注册')







=======
        this.$message.warning('请输入正确的邮箱')
        return false
      },
      ...mapActions(['register']),
      // 注册
      handregister () {
        // 两次输入的密码是否一致
        if (this.confirmPassword !== this.password) {
          return this.$message.warning('两次输入的密码不一致')
>>>>>>> .theirs
        }
<<<<<<< .mine
        this.$message.success('注册成功')
        this.$router.push({ name: 'login' })
      })
      // this.register({
      //   username: this.username,
      //   email: this.email,
      //   password: this.password
      // })
      // this.$router.push({name: 'login'})

















=======
        // 信息填写是否正确完善
        if (!this.ueserNamePattern() || !this.emailPattern() || !this.passwordPattern()) {
          return this.$message.warning('请正确填写注册信息')
        }
        // 所有信息填写正确后
        // 将用户信息post至后台
        let userMessage = {
          username: this.username,
          password: this.password,
          confirmPassword: this.confirmPassword,
          email: this.email
        }
        this.$http.post('http://192.168.0.237:2860/api/WebUser/Register', userMessage).then(res => {
          if (res !== '注册成功') {
            return
          }
          this.$message.success('注册成功')
          this.$router.push({name: 'login'})
        })
        // this.register({
        //   username: this.username,
        //   email: this.email,
        //   password: this.password
        // })
        // this.$router.push({name: 'login'})
      }
>>>>>>> .theirs
    }
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
  background-color: #fff;
  margin-top: 15px;
}
.fullscreen {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-box {
  position: relative;
  width: 400px;
  margin: 0 auto;
  padding: 0px 15px;
}
.register-box .logo {
  max-width: 40%;
  margin-bottom: 30px;
}
.register-box .text-tips-header {
  width: 100%;
  text-align: center;
  color: #909db7;
  display: inline-block;
  font-size: 14px;
}
.register-box .text-tips {
  text-align: center;
  color: #909db7;
  display: inline-block;
  width: 50%;
  font-size: 14px;
}
.register-box .m-label {
  display: inline-block;
  width: 20%;
  font-size: 14px;
}
.register-box .m-input {
  width: 80%;
  padding: 10px;
  border: none;
  outline: none;
  box-sizing: border-box;
  border: 1px solid #e7ecee;
  display: inline-block;
  border-radius: 5px;
}
.register-box .m-btn {
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
.register-box .m-btn.m-btn-text {
  display: inline-block;
  background: #fff;
  color: #1bbd70;
  padding: 5px;
  font-size: 16px;
  width: 40%;
}
.register-box .m-btn:hover {
  background-color: #15a25f;
}
.register-box .m-btn.m-btn-text:hover {
  background-color: #f4f5f5;
}
.register-box .m-btn:active {
  opacity: 0.8;
}
@media (max-width: 768px) {
  .register-box {
    width: auto;
  }
}
</style>
