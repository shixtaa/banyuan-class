<template>
  <div class="login">
    <h1>登录</h1>
    <div class="input-box">
      <input type="text" placeholder="姓名" v-model="nameInput">
      <input type="text" placeholder="年龄" v-model="ageInput">
      <input type="text" placeholder="性别" v-model="genderInput">
      <input type="text" placeholder="学校" v-model="schoolInput">
    </div>
    <button @click="login">登录</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  name:"login",
  data(){
    return {
      nameInput:'',
      ageInput:'',
      genderInput:'',
      schoolInput:'',
      // list:[]
    }
  },
    // created() {
    //   console.log(this.$store)
    // },
  methods:{
    ...mapActions([
      'getInfo'
    ]),
    login(){
      if(!this.nameInput){
        this.$message.error('请输入姓名');
      }else if(!this.ageInput){
        this.$message.error('请输入年龄');
      }else if(!this.genderInput){
        this.$message.error('请输入性别');
      }else if(!this.schoolInput){
        this.$message.error('请输入学校');
      }else{
        let obj={
            name:this.nameInput,
            age:this.ageInput,
            gender:this.genderInput,
            school:this.schoolInput
          }
        this.getInfo(obj)
        this.$router.push({
          name:'content'
        })
      }
      
    }
  }
}
</script>
<style lang="scss">
  .login{
    width: 600px;
    height: 500px;
    border: 1px solid #eee;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    border-radius: 10px;
    box-shadow: 3px 3px 5px #eee;
    .input-box{
    display: flex;
    flex-direction: column;
    align-items: center;
      input{
        width: 400px;
        height: 40px;
        margin-bottom: 20px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid #eee;
        border-radius: 6px;
        padding: 0 5px;
      }
    }
    button{
      width: 400px;
      height: 40px;
      border-radius: 6px;
      outline: none;
      background-color: #8186d5;
      border: none;
      color: #fff;
      font-weight: 700;
      font-size: 18px;
    }
    button:active{
      background-color: #c6cbef;
    }
  }
</style>