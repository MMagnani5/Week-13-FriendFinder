// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Creating the EXPRESS server
var app = express();
var PORT = process.env.PORT || 3000;


// BodyParser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Static Component
var staticContentFolder = __dirname + "/public";
app.use(express.static(staticContentFolder));


// Routing
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});