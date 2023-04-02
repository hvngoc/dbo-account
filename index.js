var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var userService = require('./services/userServices.js');



/*-----------------------------INIT--------------------------------*/
app.set('port', 9000);
app.use(bodyParser.json({limit: '50mb'}));       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

global.appRoot = __dirname;
/*-----------------------------END---------------------------------*/

app.get('/user/types', userService.getAllListType);



/*-----------------------------SAMPLE--------------------------------*/
app.get('/', function(req, res){
	console.log(req.url);
	res.type('text/plain');
	res.send('Hello World');
})

app.get('/testEmail', function(req, res) {
	console.log("test send email");
	puid.sendEmail("ngoc.hoang@gmail.com", "Verify Account", "Please verify your account!");
})

app.listen(app.get('port'), function(){
	console.log("Server is running at " + app.get('port'));
})