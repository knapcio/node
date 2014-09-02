var express  = require('express');
var app      = express();
var port  	 = process.env.PORT || 8080;

app.get('*', function(req, res) {
	res.sendfile('../app/index.html');
});

app.listen(port);
console.log("App listening on port " + port);
