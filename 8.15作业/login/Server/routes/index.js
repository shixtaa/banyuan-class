const users=require('./users')
const login=require('./login')
module.exports =  (router) => {
  // router.get('/welcome', async function (ctx, next) {
  //   ctx.state = {
  //     title: 'koa2 title'
  //   };

  //   await ctx.render('welcome', {title: ctx.state});
  // })
  users(router)
  login(router)
}
