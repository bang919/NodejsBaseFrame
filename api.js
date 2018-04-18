var express = require('express');
var package = require('./package.json')
var http = require('http');
var app = express();

var server = http.createServer(app);

server.listen('3000');
server.on('listening', onListening);

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    console.log(package.name + ' api start : ' + bind)
}

/**
 * Middlewares
 */
const errorHandler = require('./src/middleware/error_handler')
const jsonParser = require('body-parser').json({limit:'5mb'})

/**
 * Model
 */
let client = new require('./src/model/client')
let device = new require('./src/model/device')

/**
 * Routers
 */
const deviceRouter = require('./src/route/device_router')

/**
 * Controllers
 */
const deviceController = require('./src/controller/device_controller')

app.use('/device',deviceRouter(jsonParser, deviceController));

//Default error handler
app.use(errorHandler)



