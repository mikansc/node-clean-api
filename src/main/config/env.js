module.exports = {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://michaelnsc:miguelito3@mkdev-lo7rc.gcp.mongodb.net/clean-node-api?retryWrites=true&w=majority',
  tokenSecret: process.env.TOKEN_SECRET || 'secret'
}
