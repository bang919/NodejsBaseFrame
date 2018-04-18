const Mongo = require('./mongo_model')

class Client extends Mongo {
    constructor() {
        super('client')
    }
}

module.exports = Client;