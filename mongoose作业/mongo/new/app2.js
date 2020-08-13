const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const cors = require('koa2-cors');

const views = require('koa-views')
const co = require('co')
const convert = require('koa-convert')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')

const config = require('../test/config')
const routes = require('../test/routes')

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

// router.get('/', async (ctx, next) => {
//   // ctx.body = 'Hello World'
//   ctx.state = {
//     title: 'Koa2'
//   }
//   await ctx.render('index', ctx.state)
// })
router.post('/checkname', async (ctx, next) => {
  const {name}=ctx.request.body;
  const names=['zhao','qian','zhou','wang']
  console.log(name)
  let data={}
  var partten = /^[a-zA-Z0-9_-]{4,16}$/;
  var flag = partten.test(name);
  if(flag){
    if(names.indexOf(name)==-1){
      data.flag=true
      
    }else{
      data.flag=false;
      data.message='用户名重复'
    }
  }else{
    data.flag=false
    data.message='用户名输入错误，4到16位，字母，数字，下划线，减号'
  }
  ctx.response.body=data
})

router.post('/post', async (ctx, next) => {
  const {name,pwd}=ctx.request.body;
  const names=['zhao','qian','zhou','wang']
  let data={}
  var parttenName = /^[a-zA-Z0-9_-]{4,16}$/;
  var flag = parttenName.test(name);
  var parttenPwd = /^\w{8,15}$/;
  var key = parttenPwd.test(pwd);
  if(flag){
    if(names.indexOf(name)==-1){
      data.flag=true  
      if(key){
        data.key=true
      }else{
        data.key=false
        data.message='密码格式错误，password的长度不小于8位，不大于15位'
      }
    }else{
      data.flag=false;
      data.message='用户名重复'
    }
  }else{
    data.flag=false
    data.message='用户名输入错误，4到16位，字母，数字，下划线，减号'
  }


  if(data.key&&data.flag){
    ctx.response.body={status:'success'}
  }else{
    ctx.response.body={error:data.message}
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
