const DefaultError = require('../lib/default_error');
const Client = require('../model/client')

module.exports = {
    register : function() {
        return async function(req, res){
            let body = req.body;
            let client_name = body[Client.client_name];
            let password = body[Client.password];
            res.send('client_controller ' + client_name)
        }
    }
}