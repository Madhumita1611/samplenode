let express = require('express');
let app = express();
var cors = require('cors')
let bodyParser = require('body-parser')
var admin = require('firebase-admin');
const serviceAccount = require('../service_account.json')

admin.initializeApp({
    credential: admin
        .credential
        .cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});
global.admin = admin

app.use(bodyParser.json())

app.use(cors({ origin: true, credentials: true }))



let routes = require('./routes/routes');
app = routes.mapRoutes(app);
module.exports = app;