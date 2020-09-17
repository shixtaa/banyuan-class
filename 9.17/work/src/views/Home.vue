<template>
  <div class="home">
    <Aside @setTitle="compName" ></Aside>
    <div class="right">
      <headNav :title="title"></headNav>
      <div class="content-box">
        <router-view></router-view>
      </div>
        
    </div>
  </div>
</template>

<script>
import Aside from "../components/aside"
import headNav from "../components/headerNav"

export default {
  name: 'Home',
  components: {
    Aside,headNav
  },
  data(){
    return {
      title:'我的课程'
    }
  },
  methods:{
    compName(data){
      console.log(data)
      this.title=data.title
    }
  },
  props:{
    
  }
}
</script>
<style lang="scss">
.home{
  position: relative;
}
.right{
  position: absolute;
  left: 225px;
  top: 0;
  bottom: 0;
  right: 0;
    .content-box{
    width: calc(100vw - 225px);
      height:calc(100% - 56px);
      margin: 56px auto 0;
      box-sizing: border-box;
      padding:80px 0 120px;
      display: flex;
      justify-content: center;
  }
}

</style>
