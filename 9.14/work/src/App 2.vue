<template>
  <div id="app">
    <Work></Work>
  </div>
</template>

<script>
import Work from "./components/work"

export default {
  name: 'App',
  components:{
    Work
  } 
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
