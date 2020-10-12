<template>
  <div class='aside'>
    <img class="logo" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/logo_black_bottom@2x.png" alt="">
    <img class="avatar" src="http://by-image.oss-cn-shanghai.aliyuncs.com/official-site/E2_Icon.jpg" alt=""> 
    <h2>非会员</h2>
    <ul class="user-menu-ul" style="height:55%">
      <li class="">
        <div class="user-menu-li" @click="getText('Course','我的课程')" :style="{backgroundColor:spanName==='Course'?'rgba(105,100,209,.35)':''}"> 
          <img class='icon' alt="" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png">
          <span >我的课程</span>
        </div>
      </li>
      <li class="">
        <div class="user-menu-li" @click="getText('Email','邮箱')" :style="{backgroundColor:spanName==='Email'?'rgba(105,100,209,.35)':''}">
          <img class='icon' alt="" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-email.png">
          <span >邮箱</span>
        </div>
      </li>
    </ul>
    <div class="aside-bom">
      <ul class="user-menu-ul">
        <li class="">
          <div class="user-menu-li" @click="getText('Setting','设置')" :style="{backgroundColor:spanName==='Setting'?'rgba(105,100,209,.35)':''}">
            <img class='icon' alt="" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-set.png">
            <span >设置</span>
          </div>
        </li>
        <li >
          <div class="user-menu-li">
            <img class='icon' alt="" src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-quit.png">
            <span>退出</span>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>
<script>
export default {
  name:'asideLeft',
  data(){
    return {
      spanName:'Course',
      title:'我的课程'
    }
  },
  methods:{
    getText(name,title){
      this.spanName=name;
      this.title=title;
      this.$emit("change",{
        name:this.spanName,
        title:this.title
      })
    }
  }
}
</script>
<style>
li{
list-style: none;
}

.aside{
  width: 225px;
  height: 100vh;
  min-height: 768px;
  background-color: #141c3b;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
}
.logo{
  width: 146px;
  height: 43px;
  cursor: pointer;
  margin: 9px 0 36px;
}
.avatar{
  width: 78px;
  height: 78px;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
}
.aside>h2{
  font-size: 14px;
  font-weight: 300;
  color: #e8e8e8;
  line-height: 25px;
  padding: 5px 0 36px;
}
.user-menu-li{
  list-style: none;
  width: 225px;
  height: 54px;
}
.user-menu-li{
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.user-menu-li:hover{
  background-color: rgba(105,100,209,.8) !important;
}
.icon{
  width: 22px;
  height: 22px;
  margin-right: 9px;
}
.user-menu-li span{
  font-size: 16px;
  color: #e8e8e8;
  font-weight: 400;
  line-height: 54px;
  width: 70px;
  text-align: left;
}
.aside-bom{
  /* position: absolute;
  bottom: 30px; */
}
</style>
