module.exports = (fn) => {
    return (req, res, next) => {
        let e = fn(req, res, next);
        if(e) {
            e.catch((err) => next(err));
        }
    }
}