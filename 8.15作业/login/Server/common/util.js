async function checkName(name){
  let partten = /^[a-zA-Z0-9_-]{4,16}$/

  return partten.test(name)
}


async function checkPassword(password){
  let partten = /^\w{8,15}$/

  return partten.test(password)
}

module.exports={
  checkName,
  checkPassword
}