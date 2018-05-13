var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

//=======================passport===============//
var passport = require('passport')
var session = require('express-session')
var env = require('dotenv').load()  


// Sets up the Express App
// =============================================================
var app = express();

//app 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("public"));

// For Passport 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//load passport strategies
require('./config/passport/passport.js')(passport,db.newMember);
// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

var authRoute = require('./routes/api-routes.js')(app,passport);

//do we need to do the sequelize sync? 

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});