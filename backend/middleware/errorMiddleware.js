// the default content type of throw new Error() in express is text/html;
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ?  res.statusCode : 500;
    
    res.status(statusCode);
    res.json({
        message: err.message,
        // additional info only if we are in dev mode
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler
};