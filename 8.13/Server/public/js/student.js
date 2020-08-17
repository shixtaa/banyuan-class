    let nameEle=document.getElementsByClassName('username')[0]
    console.log(nameEle)
    let genderEle=document.getElementsByClassName('gender')[0]
    let ageEle=document.getElementsByClassName('age')[0]
    console.log(ageEle)
    let majorEle=document.getElementsByClassName('major')[0]
    let btnEle=document.getElementsByClassName('btn')[0]
    // 获取selector中option的方式
    function getGender(){
      const index = genderEle.selectedIndex

      const gender = genderEle.options[index]

      return gender.value
    }
    function getMajor(){
      const index = majorEle.selectedIndex
        
      const major = majorEle.options[index]
        
      return major.value
    }

    btnEle.onclick=()=>{
      $.ajax({
        type:'post',
        url:'http://localhost:3000/login',
        data:{
          name:nameEle.value,
          gender:getGender(),
          age:ageEle.value,
          major:getMajor()
        },
        success:(result)=>{
          console.log('success')
        }
      })
    }