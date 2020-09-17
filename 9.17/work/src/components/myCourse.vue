<template>
  <div class="course-list">
    <h2 style="margin-left:15px">推荐课程</h2>
    <div  class="course-for" v-for="(item,index) in list" :key="index">
      <div class="course-info" style="margin-right:25px">
        <h3>{{item.name}}</h3>
        <p>{{item.intro}}</p>
      </div>
      <div class="continue" @click="index==0&&jump()">
        <button class="btn">继续学习</button>
      </div>
    </div>
  <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import headNav from "./headerNav"
export default {
  name:'myCourse',
  components:{
    headNav
  },
  data(){
    return{
      list:[
        {
          name:"Vue",
          intro:"专业的Vue教学，包含Vue全家桶与实战项目。"
        },
        {
          name:"Java机器学习",
          intro:"在本课程中，您将学习如何使用Java构建机器学习模型，根据历史数据预测金融走势；构建深度学习模型，使用标记的数据预测个性行为。"
        },
        {
          name:"Java基础",
          intro:"半圆《Java 基础》课程根据企业对人才的要求出发，进行组织授课内容和练习，带领同学们尽快实际掌握Java语言。"
        }
      ]
    }
  },
  methods:{
    jump(){
      this.$router.push({
        name:'About'
      })
    }
  }
}
</script>
<style>
  .course-list{
    width: 70%;
    text-align: left;
  }
  .course-list>h2{
    font-size: 20px;
    font-weight: 400;
    color: #707070;
    line-height: 28px;
  }
  .course-for{
    /* width: 100%; */
    padding: 40px 40px 40px 44px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px;
  }
  .course-info>h3{
    font-size: 20px;
    font-weight: 500;
    font-family: PingFangSC-Regular;
    color: #404040;
    line-height: 28px;
    padding-bottom: 10px;
  }
  .course-info>p{
    font-size: 16px;
    font-weight: 500;
    font-family: PingFangSC-Regular;
    color: #909090;
    line-height: 22px;
  }
  .btn{
    width: 100px;
    height: 30px;
    background: #6964d1;
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    font-family: PingFangSC-Regular;
    line-height: 30px;
    text-align: center;
    border: none;
    outline: none;
  }
</style>