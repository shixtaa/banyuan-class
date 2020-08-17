const controller=require('../controller/test')
module.exports = (router) => {
  router.get('/student',controller.student)
  router.post('/login',controller.login)
}
  
  