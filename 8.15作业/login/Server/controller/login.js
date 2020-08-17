const { model } = require('mongoose')

async function homepage(ctx,next){
  await ctx.render('login')
}
module.exports={
  homepage
}