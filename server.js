// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('badges.json')

const helmet = require('helmet')

// set the JSON server to only support GET requests
const middlewares = jsonServer.defaults({
  readOnly: true
})

// security settings to improve express
// disable CSP so the shields load
server.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false
  })
)

// start of a log for inbound requests
// not sure this can work since the inbound will always be shields.io?
// let demoLogger = (req, res, next) => {
//   var origin = req.get('Referer')
//   console.log("From " + origin)
//   next()
// }

// server.use(demoLogger)

server.use(middlewares)

// hang the API off the /badges base route
server.use('/badges', router)

server.listen(process.env.PORT, () => {
  console.log('Twitter API Version Badge Server is running on port ' + process.env.PORT)
})