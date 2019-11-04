var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'localhost',
    port : 3307,
    user : 'root',
    password : 'asdf1234',
    database : 'jsman'
})
// //error가 npm install mysql --save한 시점으로 뜨는 것으로 추정됨.
// //아.. 갑자기 된다.. 연결 중인 네트워크가 불안정해서 그런가..
// 개삽질.. 하루 빠잉.. (coonection.connnect까지 출력 확인.))) 
// 며칠째야... 행복해^^

connection.connect()


app.listen(3000, function() {
    console.log("start! express server on port 3000 ");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//url routing
app.get('/', function(req, res){
    // res.send("<h2>hi friend :>(:< </h2>")
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', function(req, res){
    // res.send("<h2>hi friend :>(:< </h2>")
    res.sendFile(__dirname + "/public/main.html")
})

app.post('/email_post', function(req, res) {
    //get : req.param('email')
    //res.send("post response")
    console.log(req.body.email) //출력이 object이 나오네 -> '.email'
    // res.send("<h1>welcome " + req.body.email + "</h1>")
    res.render('email.ejs', {'email' : req.body.email})
})

app.post('/ajax_send_email', function(req, res) {
    var email = req.body.email;
    var responseData = {};

    var query = connection.query('select name from user where email="' + email + '"', function(err, rows) {
        if(err) throw err;
        if(rows[0]) {
            //   console.log(rows[0].name)
            responseData.result = "ok";
            responseData.name = rows[0].name;
        }   else {
            responseData.result = "none";
            responseData.name = "";
            // console.log("none : " + rows[0])
        }
    })
    // console.log(req.body.email);
    //check validation about input value => select db
    // var responseData = {'result' : 'ok', 'email' : req.body.email}
    res.json(responseData)
});

