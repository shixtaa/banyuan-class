<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./components/home";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
