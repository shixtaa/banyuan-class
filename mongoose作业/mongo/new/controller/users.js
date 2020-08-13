async function welcome(ctx,next){
  ctx.state={
    title:'banyuan'
  }
  await ctx.render('index')
}
module.exports={
  welcome
} 