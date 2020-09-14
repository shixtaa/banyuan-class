<template>
  <div class="setting">
    <div class="setting-top">
      <span>个人信息</span>
      <span>账号信息</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'setting'
}
</script>
<style scoped>
.setting{
  width: 70%;
}
.setting-top{
  text-align: left;
}
.setting-top>span{
  font-size: 20px;
  font-weight: 500;
  color: #707070;
  line-height: 26px;
  cursor: pointer;
  margin:0 25px;
}
</style>