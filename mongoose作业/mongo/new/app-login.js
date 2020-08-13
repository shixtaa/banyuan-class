const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const cors = require('koa2-cors');
const mongoose=require('mongoose');

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
  .use(json())
  .use(logger())
  .use(cors({
    credentials: true,
  }))
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'njk': 'nunjucks'},
    extension: 'njk'
  }))
  .use(router.routes())
  .use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello World'
  ctx.state = {
    title: 'Koa2'
  }
  await ctx.render('index', ctx.state)
})

// console.log(mongoose)
async function initConnection(){
    await mongoose.connect('mongodb://localhost/local',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },(error)=>{
        if(error){
            console.log(error);
        }
        console.log('mongodb connection success');
    }
    )
}
initConnection()
const {Schema}=mongoose;
const usersSchema=new Schema({
  name:String,
  password:String
})
const usersModel=mongoose.model('users',usersSchema);
router.post('/regist', async (ctx, next) => {
  const {name,password,check}=ctx.request.body;
  let patternName=/^[a-zA-Z_-]{4,16}$/;
  let patternPwd=/^[0-9a-zA-Z_]{8,15}$/;
  let flag=patternName.test(name);
  let key=patternPwd.test(password);
  let result=(password==check)?true:false;
  
  if(flag&&key&&result){}
    let data={
      name,
      password
    }   
    let data2={}
    let findResult=await usersModel.findOne({name})
    if(findResult){
        data2.message='用户名已存在'
        data2.status='failed'
    }else{
      data2.status="success"
      const userModel=new usersModel(data)
      await userModel.save() 
    }
    
    ctx.response.body=data2
})



router.post('/login', async (ctx, next) => {
  const {name,password}=ctx.request.body;

  let result=await usersModel.findOne({name})
  console.log(result)
  let data={}
  try {
  if(result){
    if(result.password!==password){
      data.status='failed',
      data.message='密码错误'
    }else{
      data.status="success"
    }
  }else{
    data.message='用户不存在'

  }
  
  ctx.response.body=data
} catch (error) {
    console.log(error)
}
})

routes(router)

app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
