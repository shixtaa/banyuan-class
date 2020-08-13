module.exports =  (router) => {
  const mongoose=require('mongoose');
    async function initConnection(){
    await mongoose.connect('mongodb://localhost/local',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },(error)=>{
        if(error){
            console.log(error);
        }
        console.log('mongodb connection success');
    }
    )
  }
  initConnection()
  const {Schema}=mongoose;
  const studentsSchema=new Schema({   
        "name":String,
        "gender":Number,
        "age":Number,
        "major":String,
    
    })
  const studentsModel=mongoose.model('students',studentsSchema);
  router.post('/login', async function (ctx, next) {
    const {name,gender,age,major}=ctx.request.body;
    // console.log(name,gender,age,major)
    
    let data={
      "name":name,
        "gender":gender,
        "age":age,
        "major":major,
    }
    const studentModel=new studentsModel(data)
    await studentModel.save() 
    // console.log(await studentsModel.findOne({}))
    ctx.response.body={status:"success"}
  })
}

