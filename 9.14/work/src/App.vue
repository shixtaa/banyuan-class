<template>
  <div id="app">
    <Aside @change="compName" ></Aside>
    <div class="right">
      <headNav :title="title"></headNav>
      <div class="content-box">
        <keep-alive>
          <component :is="activeComp"></component>  
        </keep-alive>
      </div>
        
    </div>
    
  </div>
</template>

<script>
import Aside from './components/aside'
import Course from "./components/myCourse"
import headNav from "./components/headerNav"
import Email from "./components/email"
import Setting from "./components/setting"

export default {
  name: 'App',

  components:{
    Aside,headNav,Course,Email,Setting
  },
  data(){
    return{
      activeComp:'Course',
      title:'我的课程'
    }
  },
  methods:{
    compName(data){
      this.activeComp=data.name
      this.title=data.title
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
.content-box{
  width: calc(100vw - 225px);
    height:calc(100% - 56px);
    margin: 56px auto 0;
    box-sizing: border-box;
    padding:80px 0 120px;
    display: flex;
    justify-content: center;
}
</style>
