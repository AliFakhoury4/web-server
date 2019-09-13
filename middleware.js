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

module.exports = middleware;