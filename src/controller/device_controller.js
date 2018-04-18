const DefaultError = require('../lib/default_error');

module.exports = {
    register : function(){
        return async function(req, res){
            let body = req.body;
            res.send('xx.xx.x.x')
        }
    }
}