var express = require('express'); 
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337; 

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
	res.status(200).send('Hello world!'); // Heroku would show this msg to see it's successful
});

app.listen(port, function () {
	console.log('Listening on port ' + port); // see it's alive
});

app.post('/hello', function (req, res, next) {
	var userName = req.body.user_name; // extract user name from requrested
	var botPayload = {
		text: 'Hello' + userName + ', welcome to UF'
	}; // concat like a string
	if (userName != 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});
