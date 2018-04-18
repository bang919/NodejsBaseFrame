const DefaultError = require('../lib/default_error');

module.exports = {
    register : function(){
        return async function(req, res){
            let body = req.body;
            console.log('token',body.client_token)
            console.log('code', body.unique_code)
            res.send('xx.xx.x.x')
        }
    }
}