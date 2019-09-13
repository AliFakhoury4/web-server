var express = require('express');
var app = express();
var PORT = 3000;

// app.get('/', function(req, res){
// 	res.send('Hello Express!');
// });

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + req.method + ' ' + req.originalUrl + '\nDate: ' + new Date().toString());
		next();
	}
};

app.use(middleware.logger);

app.get('/AboutUs', middleware.requireAuthentication
,function(req, res){
	res.send('Hello About Us!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function(){
	console.log("Express Server on port " + PORT + " has Started!");
}); 