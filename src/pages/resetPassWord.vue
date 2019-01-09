<template>
  <div class="fullscreen">
    <div class="register-box">
      <p class="text-tips-header" >你好，欢迎修改密码</p>
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
                   class="m-label">注册邮箱</label><input type="email"
                   placeholder="E-mail"
                   class="m-input"
                   v-model="email"
                   @blur="emailPattern">
          </div>
          <div class="m-list-group-item">
            <label for="newPassword"
                   class="m-label">新密码</label><input type="password"
                   placeholder="只能输入6-20个字母、数字、下划线 "
                   class="m-input"
                   v-model="newPassword"
                   @blur="passwordPattern(newPassword,$event)">
          </div>
          <div class="m-list-group-item">
            <label for="confirmPassword"
                   class="m-label">确认密码</label><input type="password"
                   placeholder="请确认密码"
                   class="m-input"
                   v-model="confirmPassword"
                   @blur="passwordPattern(confirmPassword,$event)">
          </div>

        </div>
        <button class="m-btn sub select-none"
                @click.prevent="handResetPassWord">确认修改</button>
        <p class="text-tips">放弃修改？</p>
        <a @click.prevent="discardChange"
           class="m-btn m-btn-text">取消</a>
      </form>
    </div>
  </div>
</template>
<script>
// import {mapActions} from 'vuex'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      email: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    discardChange () {
      // 返回上一个页面
      this.$emit('closeReset')
    },
    // 判断用户名
    ueserNamePattern () {
      const pattern = /^[a-zA-Z\u4e00-\u9fa5]{2,10}$/
      if (pattern.test(this.username) || !this.username) {
        return true
      } else if (!this.username) {
        return false
      }
      this.$notify.error({
        title: '用户名输入错误',
        message: '用户名为2-10个字符'
      })
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
      this.$notify.error({
        title: '邮箱输入错误',
        message: '请输入正确的邮箱'
      })
      return false
    },
    // 判断密码
    passwordPattern (password, $event) {
      const pattern = /^(\w){6,20}$/
      if (pattern.test(password) || !password) {
        return true
      } else if (!password) {
        return false
      }
      this.$notify.error({
        title: '密码输入错误',
        message: '只能输入6-20个字母、数字、下划线  '
      })
      $event.target.value = ''
      return false
    },
    // 修改密码
    handResetPassWord () {
      // 两次输入的密码是否一致
      if (this.confirmPassword !== this.newPassword) {
        return this.$notify.error({
          title: '密码输入错误',
          message: '两次输入的密码不一致'
        })
      }
      // 信息填写是否正确完善
      if (!this.username || !this.newPassword || !this.confirmPassword || !this.email) {
        return this.$notify.error({
          title: '输入信息不能为空',
          message: '请完整填写相关内容 '
        })
      }
      // 所有信息填写正确后
      // 将用户信息post至后台
      let userMessage = {
        username: this.username,
        password: this.newPassword,
        confirmPassword: this.confirmPassword,
        email: this.email
      }
      this.$http.post(this.user.httppath + '/api/WebUser/ResetPasswd', userMessage).then(res => {
        console.log(res)
        if (res === '用户名和邮箱不匹配') {
          return this.$notify.error({
            title: '用户名和邮箱不匹配',
            message: '用户名或注册邮箱输入错误'
          })
        }
        this.$notify.success({
          title: '修改成功',
          message: '密码修改成功 '
        })
        this.$router.replace({ name: 'login' })
        sessionStorage.clear()
      })
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user
    })
  }
}
</script>

<style scoped type="text/css">
.m-list-group {
  padding: 0;
  margin: 0 0 20px;
}
.m-list-group .m-list-group-item {
  position: relative;
  display: block;
  margin-bottom: -1px;
  margin-top: 10px;
}
.fullscreen{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,.4);
  z-index: 56789
}
.register-box {
  position: relative;
  width: 400px;
  margin: 0 auto;
  padding: 0px 30px;
  background: white
}
.text-tips-header {
  width: 100%;
  text-align: center;
  color: black;
  display: inline-block;
  font-size: 16px;
  margin: 0;
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
  color: black;
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
