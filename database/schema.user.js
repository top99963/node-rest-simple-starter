var mongoose = require('../services/mongoose')
var CounterService = require('../services/counter')

var UserSchema = new mongoose.Schema({

    userId: {
        type: String,
        unique: true,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        validate: {
            validator: function (v) {
                return ((v.length) >= 9)
            },
            message: '{VALUE} Invalid Phone Number! Should be 9 Digit!'
        },
        required: true
    },

    email: {
        type: String,
        default: ''
    },

    balance: {
        type: Number,
        default: 0
    },

    counter: {
        type: String,
    }

}, { collection: 'User' })

UserSchema.pre('validate', function (next) {
    var user = this;
    CounterService.getUserCounter()
        .then(function (result) {
            user.counter = result.prefix + result.count
            next()
        })
})

var User = mongoose.model('User', UserSchema)
module.exports = User