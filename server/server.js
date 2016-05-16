var express = require('express'),
	app = express(),
	path = require('path'),
	morgan = require('morgan'),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client')));

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
	console.log('Server started on PORT: ' + PORT);
});

app.all('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});