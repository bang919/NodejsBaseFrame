module.exports = function(err, req, res, next) {
    console.log('error ', err.stack);
    let code = err.status || 400;
    res.status(code);
    res.json({
        status: code,
        err: err.message
    })
}