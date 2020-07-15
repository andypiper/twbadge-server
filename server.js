// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('badges.json')

// set the server to only support GET requests
const middlewares = jsonServer.defaults({
  readOnly: true
})

server.use(middlewares)

// hang the API off the /badges base route
server.use('/badges', router)

server.listen(process.env.PORT, () => {
  console.log('Twitter API Badges Server is running on port ' + process.env.PORT)
  console.log('')
})
