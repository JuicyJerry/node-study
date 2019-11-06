var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')


// DATABASE SETTING
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3307,
    user : 'root',
    password : 'asdf1234',
    database : 'jsman'
})

connection.connect()

//Router !!
router.post('/form', function(req, res) {
    console.log(req.body.email) //출력이 object이 나오네 -> '.email'
    res.render('email.ejs', {'email' : req.body.email})
})

router.post('/ajax', function(req, res) {
    var email = req.body.email;
    var responseData = {};

    var query = connection.query('select name from user where email="' + email + '"', function(err, rows) {
        if(err) throw err;
        if(rows[0]) {
            responseData.result = "ok";
            responseData.name = rows[0].name;
            res.json(responseData) // <- res.json 입력 후 출력(빈값)이 해결되었음.
        }   else {
            responseData.result = "none";
            responseData.name = "";
            res.json(responseData) // <- res.json 입력 후 출력(빈값)이 해결되었음.
        }
    })
});

module.exports = router;