<template>
  <div>
    <Header></Header>
    <div class="main-content">
      <div v-for="(item, index) in list" :key="index" class="container">
        <Info :item="item"></Info>
      </div>
      <!-- <p>现在加入，开启数字时代之门</p>
      <button>咨询</button> -->
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./header";
import Info from "./info";
import Footer from "./footer";
export default {
  name: "home",
  data() {
    return {
      list: [
        {
          url: "WEB_css.jpeg",
          title: "CSS入门",
          time: new Date().getTime(),
          information:
            "CSS是一种能为网页增添样式的语言。它能够修改网页中的字体样式、颜色、背景，增加华丽的动画与3D 效果，是给网页增添设计感的工具。"
        },
        {
          url: "WEB_css_block.jpeg",
          title: "CSS工具箱",
          time: new Date().getTime(),
          information:
            "在你进一步了解CSS样式和布局之前，这里为你提供一个助你写出合格CSS和理解所有基本理论的工具箱。"
        },
        {
          url: "WEB_css_style.png",
          title: "CSS样式文字",
          time: new Date().getTime(),
          information:
            "在这里我们开始学习为文本添加样式的基础，包括设置字体、粗细、斜体、行还有字符间距、阴影以及文本的其他特征。"
        },
        {
          url: "WEB_css_layout.jpg",
          title: "CSS布局",
          time: new Date().getTime(),
          information:
            "接下来我们将介绍如何把你想要的内容放在正确位置上，将涉及浮动和定位等相关的布局方法。"
        }
      ]
    };
  },
  components: {
    Header,
    Footer,
    Info
  }
};
</script>

<style>
.main-content {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.container {
  width: 500px;
  height: 530px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 50px 50px;
  border-radius: 4px;
}
</style>
