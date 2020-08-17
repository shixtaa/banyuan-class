const loginController = require ('../controller/login')
module.exports =  (router) => {
  router.get('/login',loginController.homepage)
}