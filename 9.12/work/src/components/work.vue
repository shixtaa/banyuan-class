<template>
<div class="container">
  <div class="warpper">
    <div class="top-input">
      <div class="input-model">
        <input type="text" v-model="name" class="input1" placeholder="姓名">
        <input type="text" v-model="phone" class="input2" placeholder="手机号">
        <span class="sex-box">
          <span class="span1 " @click="getMan" :style="{border:gender==1?'solid 1px #fff':'none'}"></span>
          <span class="span2" @click="getWoman" :style="{border:gender==0?'solid 1px #fff':'none'}"></span>
        </span>
      </div>
        <button @click="getInfo" >添加</button>
    </div>
    <div>
      <div class="all-count">{{getCount()}} 位练习人</div>
    </div>
    <List :list="list"></List>
  </div>
</div>
</template>
<script>
import List from "./list"

export default {
  name:"Work",
  data() {
    return {
      // info:'',
      // data:{},
      // isShow:true,
      list:[
        {
          phoneNumber:"13089890000",
          contacter:"小猴子",
          gender:1,
          time:new Date().getTime()
        }
      ],
      name:'',
      phone:'',
      gender:1
    }
  },
  components: {
    List
  },
  methods:{
    getInfo(){
      // this.data.contacter=this.name;
      // this.data.phoneNumber=this.phone;
      // this.data.time=new Date().getTime()
      // this.info=JSON.stringify(this.data)
      // this.list.push(JSON.parse(this.info))  

      if(!(/^1[3456789]\d{9}$/.test(this.phone))){ 
        alert("手机号码有误，请重填");  
        return 
      }else if(!this.name){
        alert("姓名不可为空");  
        return 
      }else{
        this.list.push({
        phoneNumber:this.phone,
        contacter:this.name,
        gender:this.gender,
        time:new Date().getTime()
        })
      }  
      
    },
    getMan(){
      // document.getElementsByClassName('span2')[0].classList.remove("check")
      // this.data.gender=1;
      this.gender=1
      // document.getElementsByClassName('span1')[0].classList.add("check")
    },
    getWoman(){
      // document.getElementsByClassName('span1')[0].classList.remove("check")
      // this.data.gender=0;
      this.gender=0
      // document.getElementsByClassName('span2')[0].classList.add("check")
    },
    getCount(){
      return this.list.length

    }
  },
}
</script>
<style>
.container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0
}

.warpper {
  min-width: 320px;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  background-color: #fff;
}

.top-input {
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f97197;
  padding: 0 10px;
}

.input-model {
  font-size: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.top-input .input1 {
  width: 64px;
  height: 30px;
  padding: 0 4px;
  border: none;
  outline: none;
  border-radius: 2px;
  font-size: 14px;
}

.top-input .input2 {
  width: 120px;
  height: 30px;
  border: none;
  outline: none;
  padding: 0 3px;
  border-radius: 2px;
  margin-left: 6px;
  font-size: 14px;
}

.top-input button {
  width: 60px;
  height: 30px;
  line-height: 14px;
  font-size: 14px;
  border: none;
  background: #fff;
  color: #ee7096;
  font-weight: 400;
  border-radius: 4px;
}

.all-count {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  line-height: 30px;
  font-size: 14px;
  color: #666;
  padding: 0 10px;
}
.sex-box {
  display: inline-block;
  height: 30px;
  width: 30px;
  background: #fff;
  margin-left: 6px;
  border-radius: 2px;
  font-size: 0;
}

.span1 {
  display: block;
  width: 100%;
  height: 50%;
  font-size: 12px;
  background-color: blue;
  text-align: center;
  line-height: 15px;
}

.span2 {
  display: block;
  width: 100%;
  height: 50%;
  font-size: 12px;
  background-color: #f8b8cd;
}

.check{
  border: solid 1px #fff;
}
</style>