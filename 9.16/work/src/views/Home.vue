<template>
  <div class="home">
    <Slide @change="parentChange"></Slide>
    <!-- 通过type来筛选对应的内容 -->
    <Content :list="arr"></Content>

    <!-- 通过动态组件显示各组件 -->
    <!-- <div class="main">
      <component :is="activeComp"></component> 
    </div> -->
  </div>
</template>

<script>
import Data from "../data/list"
import Slide from "../components/slide"
import Content from "../components/content"
// import Code from "../components/code"
// import Interest from "../components/interest"
// import Lesson from "../components/lesson"


export default {
  name: 'Home',
  data(){
    let newArr=Data.filter((item)=>{
        return item.type=='interest'
      })
    return {
      // activeComp:"Code"
    arr:newArr,
    list: Data
    }
  },
  components: {
    Slide,Content
    // Code,Lesson,Interest
  },
  created(){
    console.log(Data)
  },
  methods:{
    parentChange(data){
        this.arr=this.list.filter((item)=>{
        return item.type==data.comp
      })
    }
  }
}
</script>
<style lang="scss">
.home{
  padding-top: 50px;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
}
  .slide{
    position: fixed;
    width: 200px;
    top:0;
    left: 0;
    bottom: 0;
    text-align: center;
  }
  .main{
    position: relative;
    width: calc(100vw - 200px);
    left: 200px;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    box-sizing: border-box;
  }
</style>
