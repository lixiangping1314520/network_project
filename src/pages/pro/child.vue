<template>
  <div class="child">
    <span>{{value}}</span>
    <button @click='handleChange'>改变props值</button>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    handleChange () {
      this.$emit('input', 'haaa')
    }
  }
}
</script>

<style>
</style>