var configuration = require('./config/configuration')
var Language = configuration.language
var express = require('express');
var package = require('./package.json')
var http = require('http');
var app = express();

var server = http.createServer(app);

server.listen(configuration.port);

server.on('listening', onListening);

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
    console.log(package.name + Language.API_START + bind)
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

/**
 * Controllers
 */
const clientController = require('./src/controller/client_controller')

/**
 * Validators
 */
const clientValidator = require('./src/validator/client_validator')

/**
 * Routers
 */
const clientRouter = require('./src/route/client_router')

/**
 * Subscribe
 */
app.use('/client', clientRouter(jsonParser, clientValidator, clientController, client));

//Default error handler
app.use(errorHandler)



