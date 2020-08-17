const controller=require('../controller/test')
module.exports = (router) => {
  router.get('/login',controller.control)
  router.post('/login',controller.add)
}


// module.exports = function (router) => {
// router.get('/student',async(ctx,next)=>{
//     await ctx.render('student')
// })
// }