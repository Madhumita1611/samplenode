let functions = require('firebase-functions');
let basic = require("./app/app");

exports.basic = functions.https.onRequest(basic);