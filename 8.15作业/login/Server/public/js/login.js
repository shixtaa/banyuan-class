const loginName=document.querySelector('.login-name')
const loginPassword=document.querySelector('.login-password')
const loginBtn=document.querySelector('.login-btn')

loginBtn.onclick=()=>{
  let name=loginName.value
  let password=loginPassword.value
  if(name&&password){
    $.ajax({
      type:'post',
      url:'http://localhost:3000/user/login',
      data:{
        name,
        password
      },
      success:(result)=>{
        if(result.status==='success'){
          alert('登录成功')
        }else{
          alert(result.message)
        }
      }

    })
  }
}