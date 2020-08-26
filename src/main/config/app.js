const express = require('express')
const app = express()
const setupApp = require('./setup')
const setupRoots = require('./routes')

setupApp(app)
setupRoots(app)

module.exports = app
