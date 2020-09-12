<template>
  <div class="foot-container">
    <div class="content">
      <img
        v-icon-Src="'logo-footer.png'"
        alt=""
        style="width: 146px;margin:10px 0 47px;"
      />
      <span>© 2020 半圆（南京）网络有限公司 版权所有</span>
      <span>苏 ICP备 18056744-1</span>
      <span>营业执照 ICP许可证</span>
    </div>
    <div class="content">
      <p>我们的故事</p>
      <h5>半圆的发展历程和背景，更清晰的了解我们</h5>
    </div>
    <div class="content">
      <p>成为一员</p>
      <h5>半圆学社致力于数字领域的 不断开拓，欢迎志同道合的朋友加入我们。</h5>
    </div>
    <div class="content">
      <p style="margin-bottom:45px">和我们交流</p>
      <div class="contact">
        <img v-icon-Src="'phone.svg'" alt="" />
        <h5 style="margin:0">025-58703536</h5>
      </div>
      <div class="contact">
        <img v-icon-Src="'map.svg'" alt="" />
        <h5 style="margin:0">南京市仙林紫东国际创意园B9栋</h5>
      </div>
      <div style="padding-top: 24px;">
        <img class="icon" v-icon-Src="'weixin.png'" alt="" />
        <img class="icon" v-icon-Src="'weibo.png'" style="margin-left:16px" />
      </div>
    </div>
  </div>
</template>

<script>
// import Config from "../utils/config";
export default {
  name: "foot"
  // directives: {
  //   ossSrc(el, binding) {
  //     let imgPath = binding.value;
  //     if (imgPath) {
  //       el.setAttribute("src", Config.iconPath + imgPath);
  //     }
  //   }
  // }
};
</script>
<style>
.foot-container {
  width: 100%;
  background: #303232;
  padding: 64px 0 85px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.content p {
  font-size: 22px;
  line-height: 30px;
  color: #e3e3e3;
  font-weight: 500;
  cursor: pointer;
}
.content h5 {
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  color: #e3e3e3;
  font-weight: 400;
  max-width: 170px;
}
.content {
  display: flex;
  flex-direction: column;
}
.foot-container span {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #e3e3e3;
  font-weight: 400;
  padding-bottom: 14px;
}
.contact {
  display: flex;
}
.contact img {
  width: 16px;
  height: 16px;
  margin-right: 12px;
}
.icon {
  width: 24px;
  height: 24px;
}
</style>
