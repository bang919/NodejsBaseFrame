const wrap = require('../lib/wrap')
const express = require('express');
let router = express.Router();

module.exports = function(jsonParser, clientValidator, clientController){
    router.post('/register', jsonParser, wrap(clientValidator.checkRegister), wrap(clientController.register))
    return router;
}