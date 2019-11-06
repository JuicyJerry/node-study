var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router/index')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')
var flash = require('connect-flash')


app.listen(3000, function() {
    console.log("start! express server on port 3000 ");
});

app.use(express.static('public')) //미들웨어
app.use(bodyParser.json()) //미들웨어
app.use(bodyParser.urlencoded({extended:true})) //미들웨어
app.set('view engine', 'ejs') //미들웨어


app.use(session({
    secret: 'keyboard cat', //문자열로 된 키값
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


app.use(router)



