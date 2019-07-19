var mongoose = require('mongoose')
var db = require('../config.json').db

var options = {
    // autoIndex: false,
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE, 
    reconnectInterval: 3000, 
    useNewUrlParser: true
};

mongoose.connect(db, options).then(function () {
    console.log('Connected to DB')
}, function (err) {
    console.log(err)
});

module.exports = mongoose