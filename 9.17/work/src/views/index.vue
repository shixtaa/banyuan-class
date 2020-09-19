<template>
  <div class="index">
    <h1>首页</h1>
    <button @click="jump">进入Home</button>
  </div>
</template>
<script>
export default {
  name:'Index',
  methods:{
    jump(){
      this.$router.push({
        path:'/home'
      })
    }
  }
}
</script>