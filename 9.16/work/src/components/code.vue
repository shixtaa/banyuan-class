<template>
  <div class="code-box">
    <div class="code-item" v-for='(item,index) in list' :key="index">
      <div class="card"  @click="item.id==742&&jump()">
        <img :src="item.coverUrl" alt="">
        <p>{{item.title}}</p>
      </div>
      <p>{{item.summary}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name:'code',
  data(){
    return {
      list:[{
        "id": 742,
        "coverUrl": "http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/html.jpg",
        "summary": "我们将以一系列任务的方式带你完成一系列web功能的开发，最终你将学会如何在自己的服务器上部署web应用。这里使用一个简单的任务引导我们如何开始",
        "courseId": 100025,
        "title": "第一个HTML页面",
        "type": "code"
      },
      {
        "id": 761,
        "coverUrl": "http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/StickyNotes.jpg",
        "summary": "在这个任务中，我们通过构建一个便签页面，来了解CSS的相关内容。我们通过CSS将页面的显示变得更美观。", "courseId": 100025, "title": "构建一个便签页面",
        "type": "code"
      },
      {
        "id": 775,
        "coverUrl": "http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/MatchingGame.jpg",
        "summary": "我们通过构建一个记牌小游戏，来了解JavaScript相关内容，我们使用JavaScript来增加页面和用户之间的互动。",
        "title": "记牌小游戏",
        "type": "code"
      },
      {
        "id": 788,
        "coverUrl": "http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/mysql.png",
        "summary": "在这里将会带领大家完成群聊系统中用户聊天数据的管理，当完成配套练习，大家还会获得用数据库管理同学通讯录的能力。",
        "title": "MySQL数据库",
        "type": "code"
      },
      {
        "id": 799,
        "coverUrl": "http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/nodejs.png",
        "summary": "NodeJS一种javascript的运行环境，能够使得javascript脱离浏览器运行。",
        "title": "NodeJS",
        "type": "code"
      },
      {
        "id": 814,
        "coverUrl": "http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/backend.png",
        "summary": "网页上的内容、图片是从哪里获取，点击登录后，用户名和密码发送到哪里，在这里将会介绍这些交互的内容",
        "title": "前后端连通",
        "type": "code"
      },
      {
        "id": 827,
        "coverUrl": "http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/deploy.png",
        "summary": "在这里我们将一起一步一步的搭建自己的服务器，搭建成功后，你的朋友就可以通过互联网访问你开发的应用了。",
        "title": "在服务器上部署Node.js项目",
        "type": "code"
      },
      {
        "id": 841,
        "coverUrl": "http://by-courses.oss-cn-hangzhou.aliyuncs.com/%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/%E5%B0%81%E9%9D%A2/final.jpeg",
        "summary": "开发一个聊天室，将它部署到你的服务器上，可以让你的小伙伴登录上你的聊天室，进行聊天。",
        "title": "最终项目",
        "type": "code"
      }]
    }
  },
    methods: {
      jump(){
        this.$router.push({
          path:'/page'
        })
      }
    }
}
</script>
<style lang="scss">
  .code-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    
    padding-bottom: 40px;
    .code-item{
      width: 400px;
      margin:30px;

      .card{
        height: 280px;
        display: flex;
        flex-direction: column;
        border: 1px solid #eee;
        cursor: pointer;
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