const DefaultError = require('../lib/default_error');

module.exports = {
    register : 
        async function(req, res){
            let body = req.body;
            throw new DefaultError('400','error in controller')
            res.send('client_controller')
        }
}