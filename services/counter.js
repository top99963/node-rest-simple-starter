var CounterModel = require('../database/shcema.counter')

var createUserCounter = async function() {
    var newCounter = new CounterModel({
        _id: 'userCounter',
        count: 0,
        prefix: 'U'
    })
    var result = await newCounter.save()
    return result
}

var getUserCounter = async function () {
    try {
        return CounterModel.findByIdAndUpdate({ _id: 'userCounter' }, { $inc: { count: 1 } })
    }
    catch (error) {
        return await createUserCounter()
    }
}

module.exports = {
    createUserCounter,
    getUserCounter
}