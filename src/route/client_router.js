const wrap = require('../lib/wrap')
const express = require('express');
let router = express.Router();

module.exports = function(jsonParser, clientValidator, clientController, client){
    router.post('/register', jsonParser, wrap(clientValidator.checkRegister), wrap(clientController.register(client)))
    return router;
}