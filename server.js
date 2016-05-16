var express = require('express'),
	app = express()
	path = require('path');

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
	console.log('Server started on PORT: ' + PORT);
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './app/index.html'));
});