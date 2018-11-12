<template>
  <div  class="page-body">
    <h1>{{ meg }}</h1>
    <button @click="btn()">执行一个方法</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      meg: '错误在这里'
    }
  },
  methods: {
    btn () {
      this.meg = '这是一个点击按钮'
    }
  }
}
</script>

<style>
  .box-body{
    width: 100%;
    overflow: auto;
  }
</style>