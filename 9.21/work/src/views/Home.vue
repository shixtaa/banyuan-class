<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
import login from "../views/login"
export default {
  name: 'Home',
  components: {
    login
  }
}
</script>

