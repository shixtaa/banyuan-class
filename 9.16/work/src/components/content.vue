<template>
  <div class="main">
    <div class="content-box">
      <!-- <div class="test"> -->
        <div class="content-item" v-for='(item,index) in list' :key="index"   @click="item.id==742&&jump()">
          <div class="card">
            <img :src="item.coverUrl" alt="">
            <p>{{item.title}}</p>
          </div>
          <p>{{item.summary}}</p>
        </div>
      <!-- </div> -->
      
    </div>
  </div>
</template>
<script>
export default {
  name:'mainContent',
  data(){
    return {

    }
  },
  props:{
    list:{
      type:Array
    }
  }
  ,methods: {
      jump(){
        this.$router.push({
          path:'/page'
        })
      }
    }
}
</script>
<style lang="scss">
  .content-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding:0 120px;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 40px;
    .content-item{
      width: 400px;
      margin:30px;
      height: 350px;
      .card{
        height: 280px;
        display: flex;
        flex-direction: column;
        border: 1px solid #eee;
        margin-bottom: 15px;
        border-radius: 4px;
        overflow: hidden;
        img{
          width: 100%;
          height: 220px;
        }
        p{
          height: 60px;
          line-height: 60px;
        }
      }
      .card:hover{
        box-shadow: 0 0 20px 0 rgba(0,0,0,.1);
      }
    }
    
  }
</style>