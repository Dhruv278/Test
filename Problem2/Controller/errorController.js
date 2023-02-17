
module.exports = (err, req, res, next) => {

    err.status = err.status || 'error';
    err.statusCode = err.statusCode || 500;
    if (req.originalUrl.startsWith('/api')) {
        return res.status(err.statusCode).json({
             status: err.status,
             message: err.message,
             stack: err.stack,
             error: err
         });
     } else {
        return res.status(err.statusCode).render('error', {
             title: 'somthing went wrong',
             msg: err.message
         })
     }

}