var express = require('express')
var bodyParser = require('body-parser')
var userRouter = require('./router/user')

var app = express()

// Set allowed
// app.use(function(req, res, next) {
//   var allowedOrigins = ['http://localhost:3000']
//   var origin = req.headers.origin
//   if(allowedOrigins.indexOf(origin) > -1){
//       res.setHeader('Access-Control-Allow-Origin', origin)
//   } 
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token, x-access-token, authorization")
//   res.header("Access-Control-Expose-Headers", "X-Access-Token, x-access-token,authorization")
//   next();
// });

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userRouter)

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})

