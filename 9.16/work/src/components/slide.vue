<template>
  <div class="slide">
    <!-- <div class="interest" @click="change('Interest')" :style="{color:activeComp=='Interest' ?'rgb(105, 100, 209)':''}">趣味小课</div>
    <div class="course" @click="change('Lesson')" :style="{color:activeComp=='Lesson' ?'rgb(105, 100, 209)':''}">预备课程</div>
    <div class="code" @click="change('Code')" :style="{color:activeComp=='Code' ?'rgb(105, 100, 209)':''}">编程入门</div> -->
    <div class="interest" @click="change('interest')" :style="{color:activeComp=='interest' ?'rgb(105, 100, 209)':''}">趣味小课</div>
    <div class="course" @click="change('lesson')" :style="{color:activeComp=='lesson' ?'rgb(105, 100, 209)':''}">预备课程</div>
    <div class="code" @click="change('code')" :style="{color:activeComp=='code' ?'rgb(105, 100, 209)':''}">编程入门</div>
  </div>
</template>
<script>
export default {
  name:'slide',
  data(){
    return{
      activeComp:'interest',
    }
  },
  methods:{
    change(name){
      this.activeComp=name
      // this.type=
      this.$emit('change',{
        comp:this.activeComp
      })
    }
  }
}
</script>
<style lang="scss">
  .slide{
    padding-top: 60px;
    box-sizing: border-box;
    div{
      margin: 30px 0;
      cursor: pointer;
      font-family: PingFangSC-Medium;
    font-size: 18px;
    }
    div:hover{
      color: rgba(105,103,206,.8)!important;
    }
  }
</style>