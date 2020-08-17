const services = require('../services/student')

async function control(ctx, next){
  // ctx.state={
  //   students:await studentsModel.find ({}) 
  // }
  await ctx.render('students')
}

async function add(ctx, next){
  // const {name,gender,age,major}=ctx.request.body
  const data=ctx.request.body
  // let data={
  //   'name':name,
  //   'gender':gender,
  //   'age':age,
  //   'major':major,
  // }
  await services.addStudent(data)
  // const studentModel=new studentsModel(data)
  // await studentModel.save() 
      // console.log(await studentsModel.findOne({}))
  ctx.response.body={status:'success'}
}

module.exports={
  control,
  add
} 