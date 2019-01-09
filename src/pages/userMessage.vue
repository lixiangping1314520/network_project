<template>
  <div class="fullscreen">
    <div class="login-box">
      <div style="text-align: center">
        <img src="../assets/logo.png"
             alt=""
             class="logo">
      </div>
      <div class="user-content">
        <p class="user-name">
          <span class="label">用 户 名:</span>
          <span class="text">{{userMessage.username}}</span>
        </p>
        <p class="user-email">
          <span class="label">注册邮箱:</span>
          <span class="text">{{userMessage.email}}</span>
        </p>
      </div>
      <el-button type="primary"
                 plain
                 size="medium"
                 class="back-btn"
                 @click="backBtn">返回上一页</el-button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'userMessage',

  data () {
    return {
      userMessage: {}
    }
  },
  methods: {
    backBtn () {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user
    })
  },
  created () {
    let username = JSON.parse(sessionStorage.getItem('user')).username
    this.$http.post(this.user.httppath + '/api/UserInfo/UserInfo', {
      username: username
    }).then((res) => {
      this.userMessage = res
    })
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
}
.login-box {
  text-align: center;
  width: 400px;
  margin: 0 auto;
  padding: 0px 15px;
}
.login-box .logo {
  max-width: 40%;
  margin-bottom: 30px;
}
.user-content {
  font-size: 18px;
}
.user-content p {
  display: flex;
}
.label {
  display: inline-block;
  text-align: right;
  width: 150px;
  /* float: left; */
}
.text {
  display: inline-block;
  margin-left: 5%;
}
.back-btn {
  font-size: 16px;
}
@media (max-width: 768px) {
  .login-box {
    width: auto;
  }
}
</style>
