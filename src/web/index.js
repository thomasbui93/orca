const pingRouter = require('./api/health')

const initialize = (app) => {
  app.use('/ping', pingRouter)
}

module.exports = initialize