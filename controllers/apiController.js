let db = require('../models');

var getName = function (req, res, next) {
    // logic for the API end point

    // get model data

    // return data to route
    res.json({});
};

module.exports = getName;


// each api route will have its own func in the api controller

//authcontroller 
var authController = require('../controllers/apiController.js');

module.exports = function(app, passport) {
    
app.get('/signup', authController.signup);


//app.get('/main', authController.signin);  //signin or main

app.post('/signup', passport.authenticate('local-signup', {successRedirect: '/profile', 
                                                            failureRedirects: '/main'} //main not signup since signup modal is on main
                                                            ));

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

                                        

