
var UserModel = require('../database/schema.user');

exports.createUser = async function (userId, name, phoneNumber) {
    var userData = new UserModel({
        userId: userId,
        name: name,
        phoneNumber: phoneNumber
    })
    return await userData.save()
}

exports.getUser = async function (userId) {
    var query = { userId: userId }
    return await UserModel.findOne(query, { _id: 0 })
}

exports.getAllUser = async function () {
    var query = {}
    return await UserModel.find(query, { _id: 0 })
}

exports.searchByName = async function (name) {
    var query = { name: { $regex: new RegExp(name), $options: 'i' } }
    return await UserModel.find(query, { _id: 0 })
}