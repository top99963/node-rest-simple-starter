var express = require('express')
var router = express.Router()
var User = require('../module/user')

router.get('/all', async function (req, res) {
    try {
        var result = await User.getAllUser()
        res.status(200).send({ user: result })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.post('/create', async function (req, res) {
    var data = req.body
    try {
        var result = await User.createUser(data.user_id, data.name, data.phone_number)
        res.status(200).send({ user: result })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/:userId', async function (req, res) {
    try {
        var result = await User.getUser(req.params.userId)
        res.status(200).send({ user: result })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
    }
})

router.get('/search/:name', async function (req, res) {
    try {
        var result = await User.searchByName(req.params.name)
        res.status(200).send({ user: result })
    }
    catch (error) {
        res.status(400).send({ error: error.message })
    }
})

module.exports = router
