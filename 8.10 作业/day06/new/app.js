const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

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

let news=[{
  name:"这是新闻1",
  id:"news1"
},{
  name:"这是新闻2",
  id:"news2"
},{
  name:"这是新闻3",
  id:"news3"
},{
  name:"这是新闻4",
  id:"news4"
}]
router.get('/', async (ctx, next) => {
  // ctx.body = 'Hello World'
  ctx.state = {
    title: ['banyuan','class'],
    // title: 'banyuan class',
    content:"We are superman",
    test:"hello",
    flag:true,
    news:news
  }
  // await ctx.render('index', ctx.state)
  await ctx.render('child', ctx.state)
})

let tasks=[{
  name:"11",
  checked:false
},{
  name:"22",
  checked:false
},{
  name:"33",
  checked:true
},{
  name:"44",
  checked:false
},{
  name:"55",
  checked:false
},{
  name:"66",
  checked:true
}]


router.get('/todolist', async (ctx, next) => {
  ctx.state = {
    title: "To do list",
    task:tasks
  }
  await ctx.render('todolist', ctx.state)
})

router.post('/checkTask', async (ctx, next) => {
  const {name,checked}=ctx.request.body;
  tasks.forEach((item )=> {
    if(item.name===name){
      item.checked=!item.checked;
      // item.checked=checked;
      // item.checked=(checked==='true'?true:false)
      // 从前端返回的checked是字符串，如果要用可以改成item.checked=checked==='true'?true:false
    }
  });
  ctx.response.body={ status :"success"}
})

router.post('/addTask', async (ctx, next) => {
  const {name}=ctx.request.body;
  tasks.push({
    name,
    checked:false
  })
  ctx.response.body={ status :"success"}
})

router.post('/clearTask', async (ctx, next) => {
  const {ele}=ctx.request.body;
  console.log('ele ===>',ele)
  var index=0
  for(var i=0;i<tasks.length;i++){
    if(tasks[i].name==ele){
      index=i
      console.log(index)
    }
  }
  tasks.splice(index,1)
  console.log(tasks)
  ctx.response.body={index};

})

routes(router)
app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
