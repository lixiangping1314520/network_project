<template>
  <el-container class="app-container"
                :class="{
    'mini-side': isCollapse,
    'hide-side': hideSide
  }">
    <el-aside class="app-side"
              :width="hideSide ? '0' : sideWidth + 'px'"
              :style="{background: theme.theme.backgroundColor}"
              ref="appSide">
      <div class="app-header-logo-box"
           :style="{height: headerHeight + 'px', color: theme.theme.activeTextColor}">
        <img src="../assets/logo.png"
             alt=""
             class="header-logo">
        <span class="header-logo-text">控制台</span>
      </div>
      <app-side :collapse="isCollapse"
                :theme="theme.theme">
      </app-side>
    </el-aside>
    <el-container style="overflow-x: auto">
      <el-header class="app-header"
                 :height="headerHeight + 'px'">
        <app-header @switch="handleSideSwitch"
                    @set-theme="handleSetTheme"
                    @hide-side="handleSwitchHideSide"></app-header>
      </el-header>
      <el-main class="app-body"
               ref="appBody">
        <el-container style="height: 100%;min-height: 100%;overflow: auto"
                      id="appBody">
          <el-main class="app-page-body">
            <router-view></router-view>
          </el-main>
          <el-footer class="app-footer"
                     :height="footerHeight + 'px'"
                     ref="appFooter">
            <app-footer>
            </app-footer>
          </el-footer>
        </el-container>
      </el-main>
    </el-container>
    <m-back-top body-id="appBody"></m-back-top>
  </el-container>
</template>

<script type="text/javascript">
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppSide from '@/components/app-side'
export default {
  name: 'app-view',
  data () {
    return {
      isCollapse: false,
      hideSide: false,
      sideWidth: 200,
      footerHeight: 50,
      headerHeight: 50,
      theme: { theme: {} }
    }
  },
  components: {
    AppHeader,
    AppFooter,
    AppSide
  },
  methods: {
    // 控制台改变时，页脚改变
    handleSideSwitch (val) {
      this.isCollapse = val
      this.sideWidth = val ? 60 : 200
      this.footerSetWidth()
    },
    handleSwitchHideSide () {
      this.hideSide = !this.hideSide
      if (this.hideSide) {
        this.sideWidth = 0
      } else {
        this.sideWidth = 200
      }
      this.footerSetWidth()
    },
    handleSetTheme (theme) {
      this.theme = theme
    },
    // 设置页脚
    footerSetWidth () {
      this.$refs.appFooter.$el.style.width = document.body.offsetWidth - this.sideWidth + 'px'
      this.$refs.appFooter.$el.style.left = this.sideWidth + 'px'
    }
  },
  // 设置页脚
  mounted () {
    this.footerSetWidth()
    this.appSideWidth = this.$refs.appSide.$el.offsetWidth
    let vm = this
    window.onresize = function () {
      vm.footerSetWidth()
    }
  }
}
</script>

<style type="text/css">
.app-container {
  margin: 0 auto;
  position: absolute;
  width: 100%;
  height: 100%;
}
.app-container .app-header {
  padding: 0;
  background: #16aad8;
  overflow: visible;
  z-index: 100;
}
.app-container .app-side {
  width: 200px;
  transition: all 0.5s ease;
}
.app-container .app-body {
  background: #ecf0f5;
  padding: 0;
  position: relative;
  bottom: 50px;
  margin-top: 50px;
}
.app-container .app-footer {
  background: #fff;
  border-top: solid 1px rgba(48, 54, 62, 0.14);
  position: fixed;
  bottom: 0;
}
.app-container .app-page-body {
  padding: 0px;
  position: relative;
}
.app-header-logo-box {
  padding: 15px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.app-header-logo-box .header-logo {
  height: 42px;
  margin-top: -17px;
  margin-right: 5px;
  vertical-align: middle;
}
.app-header-logo-box .header-logo-text {
  font-size: 20px;
  font-weight: bold;
  opacity: 1;
}

/*mini-side*/
.app-container.mini-side .app-side {
  overflow: hidden;
}
.app-container.mini-side .app-side .el-menu--collapse {
  width: 60px;
}
.app-container.mini-side .header-logo {
  margin-left: -10px;
}
.app-container.mini-side .header-logo-text {
  opacity: 0;
}
/*hide-side*/
.app-container.hide-side .app-side {
  display: none;
}
</style>
