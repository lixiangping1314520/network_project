<template>
  <m-navbar :theme="theme.theme.headerTheme">
    <m-navbar-brand>
      <i class="side-switch"
         :class="{
        'el-icon-more': !mini,
        'el-icon-more-outline': mini
      }"
         @click="handleSwitchSide"></i>
    </m-navbar-brand>
    <!-- <m-nav>
    <m-nav-item><a href="https://www.lanyueos.com" target="_blank">主页</a></m-nav-item>
    <m-nav-item><a href="https://blog.lanyueos.com" target="_blank">博客</a></m-nav-item>
    <m-nav-item><a href="https://www.lanyueos.com" target="_blank">关于</a></m-nav-item>
  </m-nav> -->
    <m-nav align="right">
      <!-- <m-nav-item padding="0">
      <a href="https://github.com/mengdu/vue-element-admin-tpl" target="_blank"><i class="fa fa-github" style="font-size: 26px;vertical-align: middle;"></i>&nbsp;Github</a>
    </m-nav-item> -->
      <m-nav-item padding="0">
        <m-dropdown align="right"
                    v-if="user"
                    padding="0 10px">
          <a href="#"
             style="display: inline-block; padding: 0px; color: inherit">
            <img src="../assets/user.jpg"
                 alt=""
                 style="border-radius: 3px;vertical-align: middle;">
            <span>{{user.username}}</span>
            <span class="caret"></span>
          </a>
          <m-dropdown-panel>
            <m-dropdown-item><span style="display: inline-block;"
                    @click="handleuserMessage">用户信息</span></m-dropdown-item>
            <m-dropdown-item><span style="display: inline-block;"
                    @click="handleRest">修改密码</span></m-dropdown-item>
            <!-- <m-dropdown-item disabled>注销</m-dropdown-item> -->
            <div class="test-line"></div>
            <m-dropdown-item><span @click.prevent="goOut">退出账号</span></m-dropdown-item>
          </m-dropdown-panel>
        </m-dropdown>
      </m-nav-item>
      <m-nav-item padding="0 5px">
        <a href="#"
           @click.stop.prevent="handleSwitchScreen">
          <i class="fa"
             :class="isFullScreen ? 'fa-compress' : 'fa-expand'"></i>
        </a>
      </m-nav-item>
      <m-nav-item padding="0">
        <m-dropdown align="right"
                    padding="0 10px">
          <a href="#"
             style="padding:0 0px; color: inherit; position: relative;
    top: 3px;">
            <!-- <i class="fa fa-gears"></i> -->
            <img src="@/assets/setting.png" alt="" width="14px;">
          </a>
          <m-dropdown-panel style="width: 200px; min-height: 100px;">
            <el-form>
              <el-form-item label="侧边栏">
                <el-switch v-model="showAside"
                           @change="handleSwitchHideSide" />
              </el-form-item>
              <el-form-item label="主题">
                <el-select v-model="themeType"
                           style="width: 100px">
                  <el-option v-for="theme in themes"
                             :key="theme.label"
                             :label="theme.label"
                             :value="theme.name"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </m-dropdown-panel>
        </m-dropdown>
      </m-nav-item>
    </m-nav>
    <div class="reset"
         v-show="resetPassword">
      <reset-password @closeReset="closeReset"></reset-password>
    </div>
    <div class="userMessage"
         v-show="userMessage">
      <user-message @closeuserMessage="closeuserMessage"></user-message>
    </div>
  </m-navbar>
</template>

<script type="text/javascript">
import { mapActions, mapState } from 'vuex'
import {
  requestFullScreen,
  exitFullscreen
} from '@/utils'
import themes from './theme'
import ResetPassword from '../pages/resetPassWord'
import UserMessage from '../pages/userMessage'
export default {
  name: 'app-header',
  components: {
    ResetPassword,
    UserMessage
  },
  data () {
    return {
      currentProject: 'project1',
      mini: false,
      isFullScreen: false,
      themes,
      themeType: '',
      showAside: true,
      theme: { theme: { headerTheme: 'info' } },
      resetPassword: false,
      userMessage: false
    }
  },
  computed: {
    ...mapState({
      user: ({ user }) => user.user
    })
  },
  watch: {
    themeType (val) {
      this.theme = this.themes.find(e => e.name === val) || {}
      this.$emit('set-theme', this.theme)
      localStorage.setItem('theme', val)
    }
  },
  methods: {
    ...mapActions(['getLoginUser', 'logout']),
    handleSwitchSide () {
      this.mini = !this.mini
      this.$emit('switch', this.mini)
    },
    handleSwitchScreen () {
      if (this.isFullScreen) {
        exitFullscreen()
        this.isFullScreen = false
      } else {
        requestFullScreen()
        this.isFullScreen = true
      }
    },
    handleSwitchHideSide () {
      console.log('change')
      this.$emit('hide-side')
    },
    goOut () {
      sessionStorage.clear()
      this.$router.push({ name: 'login' })
    },
    handleRest () {
      this.resetPassword = true
    },
    handleuserMessage () {
      this.userMessage = true
    },
    closeReset () {
      console.log(this.resetPassword)
      this.resetPassword = false
    },
    closeuserMessage () {
      this.userMessage = false
    }
  },
  created () {
    this.getLoginUser()
    var theme = localStorage.getItem('theme') || 'default'
    this.themeType = theme
  }
}
</script>

<style type="text/css">
.side-switch {
  display: inline-block;
  font-size: 32px;
  cursor: pointer;
  color: inherit;
  margin-top: 10px;
}
.side-switch:hover {
  color: #fff;
}
.reset,
.userMessage {
  position: fixed;
  top: 0;
  background: rgba(0,0,0,.5);
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
