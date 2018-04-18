const Mongo = require('./mongo_model')

class Device extends Mongo {
    constructor() {
        super('device')
    }
}

module.exports = Device;