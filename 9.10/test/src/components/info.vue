<template>
  <div class="css-intro">
    <div class="img-box">
      <img class="info-img" v-oss-src="item.url" alt="" />
      <p class="title">{{ item.title }}</p>
    </div>
    <span class="time">创建时间：{{ item.time | timeFormat }}</span>
    <p class="information">{{ item.information }}</p>
  </div>
</template>
<script>
export default {
  name: "css-intro",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object
    }
  }
};
</script>
<style>
.css-intro {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.img-box {
  border: 1px solid #eee;
  box-shadow: 0 4px 6px #eee;
}
.info-img {
  width: 500px;
  height: 280px;
}
.title {
  padding-left: 10px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px 0;
}
.time {
  margin-top: 10px;
}
.information {
  margin: 10px 0;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: #505050;
}
</style>
