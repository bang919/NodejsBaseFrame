class DefaultError extends Error {
    constructor(code, message) {
        super(message);
        this.message = message;
        this.status = code;
    }
}

module.exports = DefaultError;