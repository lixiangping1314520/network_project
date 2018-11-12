<template>
  <el-container>
    <el-aside width="200px">
      <v-menu class="side-menu"
              :default-active="defaultActive"
              :menus="mrmenus"
              router>
      </v-menu>
    </el-aside>
    <el-container>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>
<script type="text/javascript">
import VMenu from '../../components/vmenu'
import mrmenus from './mrmenus'
export default {
  props: {
    collapse: Boolean,
    theme: Object
  },
  components: {
    VMenu
  },
  data () {
    return {
      mrmenus,
      defaultActive: 'mrdate',
      test: 'asdfasdf'
    }
  },
  watch: {
    $route () {
      this.setCurrentRoute()
    }
  },
  methods: {
    setCurrentRoute () {
      // console.log(this.$route)
      console.log('mr 选择路由函数')
      this.defaultActive = this.$route.name
    }
  },
  created () {
    this.setCurrentRoute()
  }
}
</script>
<style type="text/css">
.el-menu.side-menu {
  border-right: none;
}
.el-menu .fa {
  font-size: 18px;
  margin-right: 7px;
  display: inline-block;
  width: 23px;
  text-align: center;
}
.el-menu.side-menu .el-menu-item.is-active {
  color: #409eff;
  border-right: solid 2px #36c1fa;
  background: #eef3f5;
}
</style>
