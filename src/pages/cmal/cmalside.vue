<template>
  <el-container>
    <el-aside width="200px">
      <v-menu class="side-menu"
              :default-active="defaultActive"
              :menus="cmalmenus"
              router>
      </v-menu>
    </el-aside>
    <el-container>
      <router-view ></router-view>
    </el-container>
  </el-container>
</template>
<script type="text/javascript">
import { mapState, mapMutations } from 'vuex'
import VMenu from '../../components/vmenu'
import cmalmenus from './cmalmenus'
export default {
  props: {
    collapse: Boolean,
    theme: Object
  },
  components: {
    VMenu
  },
  computed: {
    ...mapState({
      pm: (state) => state.pm
    })
  },
  data () {
    return {
      cmalmenus,
      defaultActive: 'cmaldata',
      test: ''
    }
  },
  watch: {
    $route () {
      this.setCurrentRoute()
    }
  },
  methods: {
    ...mapMutations(['setpm_typeNow']),
    setCurrentRoute () {
      // console.log(this.$route)
      console.log(' 选择路径函数')
      this.defaultActive = this.$route.name
    },
    mrtype () {
      this.setpm_typeNow(this.typevalue.toLowerCase())
    }
  },
  created () {
    console.log('cmalside.vue cmal函数')
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
