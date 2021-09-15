process.env.NODE_ENV = "local"

let server = require('./app/app')

server.listen(process.env.PORT ? process.env.PORT : 4001)