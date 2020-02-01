module.exports = app => {
    require('./bookRoutes')(app)
    require('./viewRoutes')(app)
  }