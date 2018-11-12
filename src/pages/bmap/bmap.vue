<template>
  <div class="bmap-wrapper">
    <v-map></v-map>
  </div>
</template>
<script type="text/javascript">
import BDMap from './BMapComponent'
export default {
  components: {
    'v-map': BDMap
  }
}
</script>