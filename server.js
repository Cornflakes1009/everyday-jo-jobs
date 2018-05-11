var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
var env        = require('dotenv').load()

//needed to handle passport authentication
var passport   = require('passport')
var session    = require('express-session')

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//Models Requiring our models for syncing
var models = require("./models");  //do we need to put it all in app folder
// Requiring our models for syncing
//var db = require("./models");

// For Passport
app.use(session({ 
  secret: 'keyboard cat',
  resave: true, 
  saveUninitialized:true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
 
// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app); 
//import sign up route passing can i just require route or do i need it in a variable
var authRoute = require('./routes/auth.js')(app,passport);

//load passport strategies
require('./config/passport/passport.js')(passport,models.user);


//db.sequelize.sync().then(function() {
  //app.listen(PORT, function() {
   // console.log("App listening on PORT " + PORT);
 
   //Sync Database is this db or models? 
 models.sequelize.sync().then(function(){
  console.log('Nice! Database looks fine')

  }).catch(function(err){
  console.log(err,"Something went wrong with the Database Update!")
  });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
