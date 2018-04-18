/**
 * Error Code List
 * 410: Can't find property
 */
class DefaultError extends Error {
    constructor(code, message) {
        super(message);
        this.message = message;
        this.status = code;
    }
}

DefaultError.CANT_FIND_PROPERTY = 410;

module.exports = DefaultError;