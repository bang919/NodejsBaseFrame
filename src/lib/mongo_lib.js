const MongoClient = require('mongodb').MongoClient;
const config = require('../../config/mongo_config').mongoConfig;

let mongo;

function buildMongoUrl() {
    let url = "mongodb://"
    if(config.user) {
        url += config.user + ':'
    }
    if(config.password) {
        url += config.password + '@'
    }
    url += config.host + '/' + config.database
    console.log('buildMongoUrl - ' + url)
    return url;
}

module.exports = function() {
    if(!mongo) {
        mongo = MongoClient.connect(buildMongoUrl())
    }
    return mongo;
}