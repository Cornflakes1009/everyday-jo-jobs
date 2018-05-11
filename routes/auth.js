//import the controller and signup route
var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){
//does this need to be ../views/signup.html
    app.get('/signup', authController.signup);

//does this need to be ../views/main.html - main or sign in 
    app.get('/signin', authController.signin);

//apply passport strategy to the signup route passing 
//passport in the method and then import passport from this script
//or pass it in server.js? 
    app.post('/signup', passport.authenticate('local-signup',  { 
    successRedirect: '/main',  //is this route correct 

    failureRedirect: '/signup'
    }
));
//once logged in you should be directed to profile page
app.get('/profile',isLoggedIn, authController.profile);

app.get('/logout',authController.logout);
//route for postting to sign in profile or main page? 
app.post('/profile', passport.authenticate('local-signin',  { 
    successRedirect: '/main',
    failureRedirect: '/signin'
    }
));

//if not logged in redirected to the main
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}