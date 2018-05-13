
//var apiController = require('../controllers/apiController');
// Routes
var db = require("../models");
var passport = require("../config/passport");
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/members", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Members.findAll({}).then(function (dbMembers) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbMembers);
    });
  });

  app.post("/api/members", function (req, res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      //last_login: req.body.last_login,
      phoneNumber: req.body.phoneNumber,
      city: req.body.city,
      state: req.body.state,
      hourlyWage: req.body.hourlyWage
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  //ADDED FOR AUTHEN
  app.post("/api/main", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the profile page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
    res.json("/profile");
  });
//
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/main");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });
//
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
//
  // // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   }
  //   else {
  //     // Otherwise send back the user's email and id
      
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });

};
//routes for sign up, sign in and log out
// var authController = require('../controllers/apiController.js');

// module.exports = function (app, passport) {

//   app.get('/signup', authController.signup);


//   //app.get('/main', authController.signin);  //signin or main

//   app.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/profile',
//     failureRedirects: '/main'
//   } //main not signup since signup modal is on main
//   ));

//   //app.get('/profile' isLoggedIn, authController.profile); 

//   //app.get('/logout', authController.logout);

//   //app.post('/main', passport.authenticate('local-signin', {successRedirect: '/profile', 
//   //                          failureRedirect: '/main'}
//   //                          ));
//   //function isLoogedIn (req, res, next) {
//   //   if (req.isAuthenticated())
//   //       return next();
//   //   res.redirect('/signin');
//   //}
// }


