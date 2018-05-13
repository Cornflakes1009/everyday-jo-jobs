
var apiController = require('../controllers/apiController');
// Routes
var db = require("../models");

// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/members", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Members.findAll({}).then(function(dbMembers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbMembers);
    });
  });

app.post("/api/members", function(req, res) {
  console.log(req.body);
  db.Members.create({
    name: req.body.name,
    body: req.body.body,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    last_login: req.body.last_login,
    password: req.body.password,

  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});
};
//Passport routes for sign up, sign in and log out
//import the authController 
var authController = require('../controllers/apiController.js');

module.exports = function(app, passport) {
    
  app.get('/signup', authController.signup);


// //app.get('/main', authController.signin);  //signin or main

// app.post('/signup', passport.authenticate('local-signup', {successRedirect: '/profile', 
//                                                             failureRedirects: '/main'} //main not signup since signup modal is on main
//                                                             ));

//app.get('/profile' isLoggedIn, authController.profile); 

//app.get('/logout', authController.logout);

//app.post('/main', passport.authenticate('local-signin', {successRedirect: '/profile', 
                              //                          failureRedirect: '/main'}
                              //                          ));
//function isLoogedIn (req, res, next) {
 //   if (req.isAuthenticated())
 //       return next();
 //   res.redirect('/signin');
//}
}


