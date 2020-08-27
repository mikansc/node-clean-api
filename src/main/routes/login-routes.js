const loginRouter = require('../composers/login-router-composer')

module.exports = router => {
  router.post('/post', loginRouter)
}
