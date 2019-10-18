const { setup } = require('./configuration/setup')
const { start } = require('./configuration/server')

;(() => {
  setup()
  start()
})()