const {usersModel}=require('./schema/user')
async function insertOne(name,password){
  const userModel=new usersModel(name,password)
  await userModel.save()
}

async function find(query){
  return usersModel.find({query})
}
async function findOne(query){
  return usersModel.findOne(query)
}
  
module.exports={
  insertOne,
  find,
  findOne
}
