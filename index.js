// import json-server
const jsonServer = require('json-server')
// create server for user portal
const userPortalServer = jsonServer.create()
// create middleware used by JSON Server
const middleware = jsonServer.defaults()
// set up route for json file in server
const route = jsonServer.router('db.json')
// set up port for running server app
const PORT = 3000 || process.env.PORT

userPortalServer.use(middleware)
userPortalServer.use(route)
userPortalServer.listen(PORT, () => {
    console.log(`User Portal Server Started at port ${PORT} and waiting for client request`);
})