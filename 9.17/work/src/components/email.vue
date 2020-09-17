<template>
  <div class="email">
    <div class="email-top">
      <div class="email-left">
        <span class="news">消息列表</span>
        <a href="" class="all-read">全部已读</a>
      </div>
      <div class="email-right">
        <img src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/mall/pic_fankui_youxiang.png" alt="">
        <a href="" class="submit">意见反馈</a>
      </div>
    </div>  
  </div> 
</template>
<script>
export default {
  name:"email"
}
</script>
<style scoped>
a{
  text-decoration: none;
  color: #505050;;
}
.email{
  width: 70%;
}
.email-top{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center ;
}
.news{
  font-size: 20px;
  font-weight: 400;
  color: #707070;
  line-height: 28px;
}
.email-left>a{
  margin: 3px 0 0 30px;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  font-size: 14px;
  color: #909090;
  line-height: 20px;
  padding: 0 9px;
  height: 20px;
  box-sizing: border-box;
}
.email-left,
.email-right{
  display: flex;
}
.email-right>img{
  width: 20px;
  height: 20px;
  margin-right: 15px;
}
.submit{
  font-size: 14px;
  color: #505050;
  line-height: 20px;
}
</style>