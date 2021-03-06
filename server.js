//Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');

// API and HTML routes
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

//Create instance of express and set port
var app = express();
var PORT = process.env.PORT || 8080;

//Body parser converts data to JSON which can then be interpretted by server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Tells the server where our static pages are
app.use(express.static("app/public"));

//Server Routing Map
apiRoutes(app);
htmlRoutes(app);

//Start the server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });