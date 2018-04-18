const wrap = require('../lib/wrap')
const express = require('express');
let router = express.Router();

module.exports = function(jsonParser, deviceController){
    router.post('/register', jsonParser, wrap(deviceController.register()))
    return router;
}