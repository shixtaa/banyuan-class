const nameEle=document.querySelector('.name')
const passwordEle=document.querySelector('.password')
const btnEle=document.querySelector('.regist-btn')


var nameResult=false
var passwordResult=false
// 用户名检查（后端）
// 检查：正则 以及用户名重复（需要通过数据库）
nameEle.onblur=()=>{
  // console.log(nameEle.value)
  $.ajax({
    type:'post',
    url:'http://localhost:3000/user/checkName',
    data:{
      name:nameEle.value
    },
    success:(result)=>{
      console.log(result)
      nameResult=result.flag
      btnCheck()
      if(result.status==='success'){
        console.log(result.status)
      }else{
        alert(result.message)
      }
    },
    error:()=>[
      console.log('error')
    ]
  })

}

// 密码检查（前端）
passwordEle.onblur=()=>{
  let password=passwordEle.value
  let partten = /^\w{8,15}$/
  let flag=partten.test(password)
  if(!flag){
    alert('密码格式不正确')

  }
  passwordResult=flag
  console.log(passwordResult)
  btnCheck()
}
function btnCheck(){
  btnEle.disabled=!(nameResult&&passwordResult)
}
// 注册
btnEle.onclick=()=>{
  $.ajax({
    type:'post',
    url:'http://localhost:3000/user/regist',
    data:{
      name:nameEle.value,
      password:passwordEle.value
    },
    success:(result)=>{
      if(result.status==='success'){
        alert('注册成功')
        window.location.href='http://localhost:3000/login'
      }else{
        alert(result.message)
      }
    }
  })
}