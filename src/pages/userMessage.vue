<template>
  <div class = "userMessage">
    <div class="register-box">
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
      <!-- <el-button type="primary"
                 plain
                 size="medium"
                 class="back-btn"
                 @click="backBtn">返回上一页</el-button> -->
      <span class="back-btn"
            @click="backBtn">X</span>
      <!-- <div style="text-align: center">
        <el-button  type="primary" plain size="medium" class="back-btn" @click="backBtn">返回上一页</el-button>
      </div> -->
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
      this.$emit('closeuserMessage')
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
<style scoped type="text/css">
.register-box {
  position: absolute;
  width: 400px;
  padding: 5px 30px;
  background: white;
  color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.register-box .logo {
  width: 100px;
  height: 100px;
  max-width: 40%;
}
.user-content {
  font-size: 18px;
}
.user-content p {
  display: flex;
  margin: 0;
  font-size: 16px;
}
/* .label {
  display: inline-block;
  text-align: right;
  width: 150px; */
.label {
  text-align: right;
  width: 100px;
}
.text {
  display: inline-block;
  margin-left: 5%;
  flex: 1;
}
.back-btn {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  font-size: 16px;
  border: 1px solid gray;
  cursor: pointer;
  top: 1px;
  right: 1px;
}
@media (max-width: 768px) {
  .login-box {
    width: auto;
  }
}
</style>
