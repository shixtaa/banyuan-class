<template>
  <div class="interest-box">
    <div class="interest-item" v-for='(item,index) in list' :key="index">
      <div class="card" >
        <img :src="item.coverUrl" alt="">
        <p>{{item.title}}</p>
      </div>
      <p>{{item.summary}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name:'interest',
  data(){
    return {
      list:[{
    "id": 657,
    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/online/procedural_thinking/sorting/sorting_cover.png",
    "summary": "是计算机内经常进行的一种操作，其目的是将一组“无序”的记录序列调整为“有序”的记录序列。",
    "title": "排序算法",
    "type": "interest"
  },
  {
    "id": 589,
    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/online/procedural_thinking/design_pattern/a_example_of_Adapter.png",
    "summary": "是计算机内经常进行的一种操作，其目的是将一组“无序”的记录序列调整为“有序”的记录序列。",
    "title": "排序算法",
    "type": "interest"
  },
  {
    "id": 544,
    "coverUrl": "http://by-camp.oss-cn-shanghai.aliyuncs.com/online/procedural_thinking/recursion/%E9%80%92%E5%BD%92.jpg",
    "summary": "程序调用自身的编程技巧称为递归。它通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解，递归只需少量的程序就可描述出解题过程所需要的多次重复计算，大大地减少了程序的代码量。",
    "title": "递归",
    "type": "interest"
  },
  {
    "id": 555,
    "coverUrl": "http://by-image.oss-cn-shanghai.aliyuncs.com/Pre/drumkit/demo-2.gif",
    "summary": "简单的打击鼓页面，希望你可以谱写出华丽的乐章。",
    "title": "架子鼓",
    "type": "interest"
  },
  {
    "id": 567,
    "coverUrl": "http://by-image.oss-cn-shanghai.aliyuncs.com/Pre/clock/rotate.gif",
    "summary": "时钟的实现",
    "title": "时钟",
    "type": "interest"
  }
]
    }
  }
}
</script>
<style lang="scss">
  .interest-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    padding-bottom: 40px;
    .interest-item{
      width: 400px;
      margin:30px;

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