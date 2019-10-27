module.exports = function (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  const isDev = process.env.NODE_ENV !== 'production'
  res.status(500)
  res.json({
    error: true,
    message: `Error happened!`,
    stack: isDev ? err.stack : undefined
  })
}