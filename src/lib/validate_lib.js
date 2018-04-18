const DefaultError = require('../lib/default_error');
const moment = require('moment');


const REGEX_NUMBER = /^[0-9]+$/;

function checkNumber(number, limit) {
    if (typeof limit === 'number' && limit > 0) {
        let r = new RegExp(`^[0-9]{${limit}}$`)
        return r.test(number);
    } else {
        return REGEX_NUMBER.test(number);
    }
}

module.exports = {
    checkNumber,
}