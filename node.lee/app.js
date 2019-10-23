var express = require('express')
var app = express()
var bodyParser = require("body-parser")


app.listen(3000, function() {
    console.log("start!!! express server on port 3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs') //view engine은 ejs이야.

//url routing
app.get('/', function(req, res) {
    console.log('test');
    res.sendFile(__dirname + '/public/main.html')
});

app.get('/main', function(req, res) {
    res.sendFile(__dirname + '/public/main.html')
});

app.post('/email_post', function(req, res) {
    //get : req.param('email')
    console.log(req.body.email)
    res.render('email.ejs', {'email' : req.body.email})
})

app.post('/ajax_send_email', function(req, res){
    var email = req.body.email
    var responseData = {};

    var query = connection.query('select name from user where email="' + email + '"', function(err, rows) {
        if(err) throw err;
        if(rows[0]) {
            console.log(row[0])
            // responseData.result = "ok";
            // responseData.name = rows[0].name;
        } else {
            console.log('none : ' + rows[0])
        }
    })

    // res.json(responseData)
})

// https://www.interserver.net/tips/kb/troubleshoot-500-internal-server-error/