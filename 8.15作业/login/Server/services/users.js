const {checkName:checkRegName}=require('../common/util')
const {checkPassword:checkRegpassword}=require('../common/util')
const usersModel=require('../models/Musers')
//service中存储方法具体的语，然后被controller调用
async function findAll(){
  return await usersModel.find()
}
async function checkName(name){
  let result=await checkRegName(name)
  var data={flag:false}
  if(result){
    let nameReg=await usersModel.findOne({name})
    if(nameReg){
      data.status='failed',
      data.message='用户名重复'
    }else{
      data.flag=true
      data.status='success'
    }
  }else{
    data.status='failed',
    data.message='用户名格式错误'
  }
  return data
}
async function checkPassword(password){
  let result=await checkRegpassword(password)
  return result
}
async function regist(name,password){
  await usersModel.insertOne({name,password})
}
async function login(name,password){
  return await usersModel.findOne({name,password})
}
module.exports={
  findAll,
  checkName,
  checkPassword,
  regist,
  login
}