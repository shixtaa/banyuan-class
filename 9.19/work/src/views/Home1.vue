<template>
  <div class="home">
    <div class="work-list">
      <div class="nav">任务列表</div>
      <div class="main-content">
        <div class="input-box">
          <span>添加任务:</span>
          <input type="text" placeholder="输入任务名称，点回车即可添加任务" v-model='task' @keyup.enter="getTask">
        </div>
        <div class="list-box">
          <div class="list-aside">
              <div @click="jump(false)">未完成任务 ({{getCountN}})</div>
              <div @click="jump(true)">已完成任务 ({{getCountY}})</div>
              <div @click="jump()">全部任务 ({{getCount}})</div>
          </div>
          <div class="list-content">
            <Task :list="newArr" @check='check'></Task>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Task from "../components/task"
export default {
  name: 'Home',
  components: {
    Task
  },
  data(){
    return {
      task:'',
      checked: false,
      newArr:[],
      list:[{
        text:'待办事项1',
        isShow:false
      },
      {
        text:'已完成',
        isShow:true
      }]      
    }
  },
  created(){
    this.newArr=this.list.filter(item => item.isShow===false )
  },
computed:{
  getCount(){
    let data=this.list
    return data.length
  },
  getCountN(){
    let data=[]
    data=this.list.filter(item => item.isShow===false )
    return data.length
  },
  getCountY(){
    let data=this.list
    data=data.filter(item => item.isShow===true )
    return data.length
  }
},
  methods:{
    getTask(){
      this.list.push({
        text:this.task,
        isShow:this.checked
      })
      this.task=''
    },
    check(data){
      this.newArr[data.ind].isShow=!this.newArr[data.ind].isShow
      if(this.newArr[data.ind].isShow===false){
        
      }
    },
    jump(bool){
      let data=this.list
      if(typeof(bool)=='boolean'){
        this.newArr=data.filter(item => item.isShow===bool )
      }else{
        this.newArr=data
      }
      console.log(this.newArr)
    }
  }
}
</script>
<style lang="scss">
  .home{
    display: flex;
    justify-content: center;
    .work-list{
      position: relative;
      width: 80%;
      height: 600px;
      background-color: #FAFAFA;
      margin-top: 60px;
      border-radius: 10px;
      box-shadow: 2px 3px 5px #E0E0E0;
      overflow: hidden;
      .nav{
        width: 100%;
        height: 30px;
        background-color: #009BE8;
        color:#fff;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .main-content{
        position: absolute;
        top: 30px;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .input-box{
          display: flex;
          justify-content: left;
          width: 100%;
          margin-bottom: 40px;
          span{
            width: 80px;
            font-weight: 700;
            margin-right: 10px;
          }
          input{
            width: 90%;
          }
        }
        .list-box{
          display: flex;
          justify-content: space-between;
          width: 100%;
          position: relative;
          .list-aside{
            margin-right: 20px;
            div{
              width: 160px;
              height: 30px;
              border-radius: 6px;
              background-color: #c6cbef;
              margin-bottom: 30px;
              line-height: 30px;
            }
          }
          .list-content{
            position: absolute;
            left: 180px;
            right: 0;
            height: 400px;
            border: 8px solid #F3F3F3;
            border-radius: 6px;
            .per-list{
              display: flex;
              // justify-content: space-between;
              border-bottom: 1px solid #eee;
              height: 30px;
              align-items: center;
              padding: 0 10px;
              .checkBox{
                width: 15px;
                height: 15px;
                border: 1px solid #8186d5;
                border-radius: 3px;
              }
              p{
                text-align: left;
                padding: 0 10px;
              }
            }
          }
        }
      }
      
    }
  }
</style>
