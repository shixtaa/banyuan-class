<template>
  <div class="setting">
    <div class="setting-top">
      <span @click="changeComp('perInfo')">个人信息</span>
      <span @click="changeComp('countInfo')">账号信息</span>
    </div>
    <div class="setting-box">
      <component :is="activeComp"></component>
    </div>
  </div>
</template>
<script>
import perInfo from "./perinfo"
import countInfo from "./countInfo"
export default {
  name:'setting',
  components:{
    perInfo,countInfo
  },
  data(){
    return {
      activeComp:'perInfo'
    }
  },
  methods:{
    changeComp(name){
      this.activeComp=name
    }
  }
}
</script>
<style scoped>
.setting{
  width: 70%;
}
.setting-top{
  text-align: left;
}
.setting-top>span{
  font-size: 20px;
  font-weight: 500;
  color: #707070;
  line-height: 26px;
  cursor: pointer;
  margin:0 25px;
}
.setting-box{
  width: 100%;
  min-height:500px ;
  border: 1px solid black;
}
</style>