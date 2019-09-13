var express = require('express');
var middleware = require('./middleware.js');

var app = express();
var PORT = 3000;

// app.get('/', function(req, res){
// 	res.send('Hello Express!');
// });


app.use(middleware.logger);

app.get('/AboutUs', middleware.requireAuthentication
,function(req, res){
	res.send('Hello About Us!!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function(){
	console.log("Express Server on port " + PORT + " has Started!");
}); 