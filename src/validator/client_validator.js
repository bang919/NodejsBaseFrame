const validate = require('../lib/validate_lib');
const DefaultError = require('../lib/default_error');

module.exports = {
    checkRegister : 
        function(req, res, next) {
            return next();
        }
}