//Dependencies
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

//Create instance of express ass
var app = express();

// Set the port of our application
var PORT = process.env.PORT || 8080;

//Body parser converts data to JSON which can then be interpretted by server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use('/static', express.static(path.join(__dirname, 'app/public')))

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });