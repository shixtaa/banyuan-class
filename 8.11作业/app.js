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

const session = require('koa-session')

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port

// error handler
onerror(app)
app.keys=['shixt'];
const CONFIG={
  key:'koa.sess',
  maxAge:4000
}
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
  .use(session(CONFIG,app))
  .use(router.routes())
  .use(router.allowedMethods())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

router.get('/login', async (ctx, next) => {
  // ctx.session.message=(name:'tom')
  await ctx.render('login')
})

router.post('/login', async (ctx, next) => {
  const {name,password}=ctx.request.body;
  const data=JSON.stringify(name)
  const content=JSON.stringify(password)
  // const data=JSON.stringify({name:name,password:password})
  // ctx.cookies.set("user",data,{maxAge:5*1000})
  ctx.session.name=data;
  ctx.session.password=content;
  console.log(typeof(ctx.session.message))
  ctx.response.body ={
    status:"success"
  }
})



router.get('/loginTest', async (ctx, next) => {
  // let user;
  // if(ctx.cookies.get("user")){

  //   user=JSON.parse(ctx.cookies.get("user"));
  // }
// if(ctx.session.message){
// let user=ctx.session.message?JSON.parse(ctx.session.message):{}
// console.log(ctx.session.message)
// let message=ctx.session.message?JSON.parse(ctx.session.message):{}
// console.log(message)
let name=ctx.session.name;
let pwd=ctx.session.password;
  console.log(name)
  // const user=(ctx.cookies.get("user"));
  console.log(pwd)
  if(name&&pwd){
    console.log('登录成功')
    ctx.state={
      name:name
    }
    await ctx.render('child',ctx.state)
  }else{
    ctx.redirect('/login')
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

