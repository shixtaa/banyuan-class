// const controller=require('../controller/test')
module.exports = (router) => {
  const mongoose=require('mongoose')
  async function initConnection(){
    await mongoose.connect('mongodb://localhost/local',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
    },(error)=>{
      if(error){
        console.log(error)
      }
      console.log('mongodb connection success')
    }
    )
  }
  initConnection()
  const {Schema}=mongoose
  const studentsSchema=new Schema({   
    'name':String,
    'gender':Number,
    'age':Number,
    'major':String,
    
  })
  const studentsModel=mongoose.model('students',studentsSchema)
  router.get('/login', async (ctx, next) => {
    ctx.state={
      students:await studentsModel.find({}) 
    }
    await ctx.render('index')
  })
  router.post('/student', async function (ctx, next) {
    const {name,gender,age,major}=ctx.request.body
    let data={
      'name':name,
      'gender':gender,
      'age':age,
      'major':major,
    }
    const studentModel=new studentsModel(data)
    await studentModel.save() 
    // console.log(await studentsModel.findOne({}))
    ctx.response.body={status:'success'}
  })
}

