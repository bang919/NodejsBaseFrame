const validate = require('../lib/validate_lib');
const DefaultError = require('../lib/default_error');
const Client = require('../model/client')
const Language = require('../../config/configuration').language

module.exports = {
    checkRegister : 
        function(req, res, next) {
            let body = req.body;
            if(!body.hasOwnProperty(Client.client_name)) {
                throw new DefaultError(DefaultError.CANT_FIND_PROPERTY, Client.client_name + Language.IS_INVALID)
            }
            if(!body.hasOwnProperty(Client.password)) {
                throw new DefaultError(DefaultError.CANT_FIND_PROPERTY, Client.password + Language.IS_INVALID)
            }
            return next();
        }
}