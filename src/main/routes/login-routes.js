const loginRouter = require('../composers/login-router-composer')
const ExpressRouterAdapter = require('../adapters/express-router-adapter')

module.exports = router => {
  router.post('/post', ExpressRouterAdapter.adapt(loginRouter))
}
