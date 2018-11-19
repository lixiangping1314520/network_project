<template>
  <el-container>
    <el-aside width="200px" style="overflow:hidden">
      <el-select v-model="typevalue"
                 @change="mrtype()"
                 placeholder="mr 类型">
        <el-option v-for="item in typedate"
                   :key="item.value"
                   :value="item.value">
        </el-option>
      </el-select>
      <v-menu class="side-menu"
              :default-active="defaultActive"
              :menus="pmmenus"
              router>
      </v-menu>
    </el-aside>
    <el-container>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>
<script type="text/javascript">
import { mapState, mapMutations } from 'vuex'
import VMenu from '../../components/vmenu'
import pmmenus from './pmmenus'
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
      typedate: [{
        value: '3G RNC'
      }, {
        value: '3G RBS'
      }, {
        value: '4G'
      }, {
        value: 'NbioT'
      }
      ],
      typevalue: '3G RNC',
      pmmenus,
      defaultActive: 'pminput',
      test: 'asdfasdf'
    }
  },
  created () {
    if (sessionStorage.getItem('pname')) {
      this.setpname_prom(sessionStorage.getItem('pname'))
    }
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('pname', sessionStorage.getItem('pname'))
    })
    this.setCurrentRoute()
  },
  watch: {
    $route () {
      this.setCurrentRoute()
    }
  },
  methods: {
    ...mapMutations(['setpm_typeNow', 'setpname_prom']),
    setCurrentRoute () {
      // console.log(this.$route)
      console.log('pm 选择路径函数')
      this.defaultActive = this.$route.name
    },
    mrtype () {
      this.setpm_typeNow(this.typevalue.toLowerCase())
    }
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
