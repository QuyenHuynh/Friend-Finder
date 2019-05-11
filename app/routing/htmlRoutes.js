const path = require('path');

function htmlRoutes(app) {
	//If survey button is pressed or entered in url, display survey.html
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found default to home.html
	app.use(function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};

//Export for server.js file
module.exports = htmlRoutes;