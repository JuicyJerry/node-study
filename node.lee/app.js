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
    // res.send("<h1>welcom " + req.body.email + "</h1>")
    res.render('email.ejs', {'email' : req.body.email})
})

app.post('/ajax_send_email', function(req, res){
    console.log(req.body.email);
    //check validation about input value => select db
    var responseData = {'result' : 'ok', 'email' : req.body.email}
    res.json(responseData)
})