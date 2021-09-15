let routes = module.exports;
let basic = require('./basic')
let warmer = require('./warmer')


routes.mapRoutes = function (app) {
    let path = '/basic';

    app.use(path, basic)
    app.use(path,warmer)
    return app;
    
}