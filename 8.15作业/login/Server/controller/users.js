const services=require('../services/users')
const {checkName:checkRegName}=require('../common/util')
async function user(ctx,next){
  let users=await services.findAll({})
  ctx.state={
    users
  }
  await ctx.render('regist')
}
async function checkName(ctx,next){
  const {name}=ctx.request.body
  let result=await services.checkName(name)
  ctx.response.body=result
}

async function regist(ctx,next){
  const {name,password}=ctx.request.body
  let result=await services.checkName(name)
  let data={status:'success'}
  if(result.flag){
    let key= await services.checkPassword(password)
    if(key){
      await services.regist(name,password)
    }else{
      data.status='failed',
      data.message='密码格式错误'
    }
  }else{
    data.status='failed',
    data.message=result.message
  }
  ctx.response.body=data
  
}

async function login(ctx,next){
  const {name,password}=ctx.request.body
  let result=await checkRegName(name)
  
  let data={status:'success'}
  if(result){
    let key= await services.checkPassword(password)
    if(key){
      if(await services.login(name,password)){
        data.status='success'
      }else{
        data.status='failed',
        data.message='用户名密码错误'
      }
    }else{
      data.status='failed',
      data.message='密码格式错误'
    }
  }else{
    data.status='failed',
    data.message='用户名格式错误'
  }
  ctx.response.body=data
}
module.exports={
  user,
  checkName,
  regist,
  login
}