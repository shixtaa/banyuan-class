<template>
  <div class="container">
    <div class="aside">
      <span>姓名:{{$store.state.login.list.name}}</span>
      <span>学校:{{$store.state.login.list.school}}</span>
      <span>性别:{{$store.state.login.list.gender}}</span>
      <span>年龄:{{$store.state.login.list.age}}</span>
      <!-- <span>姓名:{{form.name}}</span>
      <span>学校:{{form.school}}</span>
      <span>性别:{{form.gender}}</span>
      <span>年龄:{{form.age}}</span> -->
    </div>
    <div class="main-content">
      <div class="content-box">
        <h3>个人信息</h3>
        <div class="info">
          <p>信息修改</p>
          <div class="info-item">
            <div class="per-item">
              <span>姓名</span>
              <input type="text" class="name" v-model="name">
              <span>学校</span>
              <input type="text" class="school" v-model="school">
            </div>
            <div class="per-item">
              <span>性别</span>
            <input type="text" class="gender" v-model="gender">
            </div>
            <div class="per-item">
              <span>年龄</span>
              <input type="text" class="age" v-model="age">
            </div>
            <button @click="save">保存</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'mainContent',
  data(){
    return{
      name:'',
      school:'',
      gender:'',
      age:'',
      form:{}
    }
  },
  created(){
    this.name=this.$store.state.login.list.name;
    this.school=this.$store.state.login.list.school;
    this.age=this.$store.state.login.list.age;
    this.gender=this.$store.state.login.list.gender;
    this.form=JSON.parse(JSON.stringify(this.$store.state.login.list))
  },
  methods:{
    save(){
      let obj={name:this.name,age:this.age,gender:this.gender,school:this.school
      }
      this.$store.commit('saveInfo',obj)
      this.$message({
          message: '修改成功',
          type: 'success'
        });
    } 
  }
}
</script>
<style lang="scss">
  .container{
    position: relative;
    display: flex;
    .aside{
      position: fixed;
      width: 200px;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: #494ca2;
      display: flex;
      flex-direction: column;
      padding-top: 100px;
      span{
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 600;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .main-content{
      position: absolute;
      min-width: 830px;
      left: 200px;
      right: 0;
      top: 0;
      bottom: 0;
      .content-box{
        width: 75%;
        margin: 0 auto;
        margin-top: 60px;
        h3{
          text-align: left;
        }
        .info{
          width: 100%;
          box-sizing: border-box;
          padding: 50px;
          border: 1px solid #eee;
          p{
            text-align: left;
          }
          .info-item{
            display: flex;
            flex-direction: column;
            justify-content: left;
            .per-item{
              width: 600px;
              display: flex;
              justify-content: left;
              span{
              height: 25px;
              }
              input{
              display: inline-block;
              height: 25px;
              width: 200px;
              margin:0 30px 30px 10px;
              outline: none;
              box-sizing: border-box;
              }
            }
            button{
              width: 200px;
              height: 30px;
              background-color: #494ca2;
              color: #fff;
              outline: none;
              border: none;
              border-radius: 6px;
            }
            button:active{
              background-color: #8186d5;
            }
          }
        }
      }
    }
  }
</style>