<template>
<div class="app-footer-box">
  <i class="fa fa-meetup" style="color: #29ABE2"></i>&nbsp; 
  <span class="footer-text">当前工程: {{prom.prom_pname}}
  </span>
</div>
</template>
<script type="text/javascript">
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      prom: (state) => state.prom
    })
  },
  data () {
    return {
      // projectName: 'project1'
      // author: '成都PDC工作室',
      // version: 'V1.0.0',
      // appName: 'Lrose 在线分析工具'
      // author: window.APP_INFO.author,
      // version: window.APP_INFO.version,
      // appName: window.APP_INFO.appName
    }
  }
}
</script>
<style type="text/css">
  .app-footer-box{
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .app-footer-box .footer-logo{
    width: 24px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .app-footer-box .footer-text{
    color: #8b949e;
  }
</style>
