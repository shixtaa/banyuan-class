<template>
  <div class="nav"> 
    <div class="back" @click="goback">
      <img  src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/ic_fanhui_jiashi.svg" alt="">
      <span class="returnHome">返回首页</span>
    </div>
    <span class="title">{{title}}</span>
  </div>
</template>
<script>
export default {
  name:'headNav',
  props:{
    title:{
      type:String
    }
  },
  methods:{
    goback(){
      this.$router.push({
        // path:'/'
        name:'index'
      })
    }
  }
}
</script>
<style>
.nav{
  width: calc(100vw - 225px);
  box-sizing: border-box;
  display: flex;
  position: fixed;
  height: 56px;
  padding: 0 20px;
  background: #fff;
  -webkit-box-shadow: 5px 6px 4px rgba(213,209,209,.5);
  box-shadow: 5px 6px 4px rgba(213,209,209,.5);
  top: 0;
  z-index: 9999;
  align-items: center;
}
.back{
  cursor: pointer;
}
.back>img{
  margin-right: 20px;
  
}
.returnHome{
  font-size: 16px;
  color: #707070;
  line-height: 56px;
}
.returnHome:hover{
  color: #000;
}
.title{
  font-size: 16px;
  font-weight: 300;
  color: #202020;
  line-height: 56px;
  margin-left: 30px;
}
</style>