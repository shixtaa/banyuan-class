<template>
  <div class="head-container">
    <!-- <img :src="pic" alt="" class="logo" /> -->
    <img
      src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/commonbg/logo.png"
      alt=""
      class="logo"
    />

    <ul class="ul">
      <li>首页</li>
      <li>职前培训</li>
      <li>高校俱乐部</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "head",
  data() {
    return {};
  }
};
</script>
<style>
.head-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 2px 6px 10px #eee;
}
.logo {
  width: 250px;
}
.ul {
  display: flex;
  align-items: center;
}
.ul li {
  list-style: none;
  margin-left: 20px;
}
</style>
