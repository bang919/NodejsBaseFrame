const Mongo = require('./mongo_model')

class Client extends Mongo {
    
    constructor() {
        super('client')
    }
}

Client.client_name = "client_name";
Client.password = "password";

module.exports = Client;