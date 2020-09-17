<template>
  <div class="page">
    <div class="page-main"  :style="{left:isShow?'300px':'0'}">
      <div class="nav">
        <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/more.png" alt="" @click="changeShow">
        <span>HTML页面演示</span>
      </div>
      <div class="main-box">
        <div class="box-content">
          <h1 v-if="content=='intro'">什么是HTML</h1>
          <h1 v-else>我是课程内容</h1>
        </div>
      </div>
    </div>
    
    <div class="page-slide" :style="{display:isShow?'block':'none'}">
      <div class="slide-top">
        <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/catalog/back.png" class="leftIcon" @click="jumpHome"></img>
        <span>编程入门</span>
      </div>
      <div class="intro"  @click="changeContent('intro')">课程介绍</div>
      <div class="course"  @click="changeContent('course')">课程内容</div>
    </div>
    <!-- <div class="page-main">
      <div class="main-box">
        <h1>什么是HTML</h1>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name:'firstPage',
  methods: {
    jumpHome(){
      this.$router.push({
        name:'Home'
      })
    },
    changeShow(){
      this.isShow=!this.isShow
    },
    changeContent(name){
      this.content=name
    }
  },
  data(){
    return{

      isShow:true,
      content:'intro'
    }
  }
}
</script>
<style lang="scss">
*{
  padding:0;
  margin: 0;
}
.page{
  position: relative;
}
.page-main{
  position: absolute;
  left: 300px;
  right: 0;
  height: 100vh;
  border-left: 15px solid #263445;
  .nav{
    position: fixed;
    height: 56px;
    width: 100%;
    z-index:999; 
    background: #263445;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    line-height: 56px;
    text-align: center;
    display: flex;
    align-items: center;
    img{
      width: 20px;
      height: 20px;
    }
    span{
      width: 100%;
      text-align: center;
    }
    
  }
}
  .page-slide{
    background: #2c3849!important;
    position:fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    color: #fff!important;
    font-weight: 400;
    .slide-top{
      width: 100%;
      height: 56px;
      display: flex;
      align-items: center;
      background: #334154;
      .leftIcon{
          width: 26px;
          height: 32px;
          margin-right: 30px;
          cursor: pointer;
        }
        span{
          font-size: 16px;
          font-weight: 400;
          line-height: 56px;
          color: #fff;
        }
    }
    .intro,
    .course{
      text-align: center;
      font-size: 14px;
      height: 52px;
      line-height: 52px;
      padding-left: 20px;
      text-align: left;
    }
  }
  .main-box{
    padding-top: 56px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .box-content{
      padding: 30px;
      box-sizing: border-box;
    }
  }
</style>