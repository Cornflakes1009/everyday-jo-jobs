//load bcrypt needed to secure passwords
var bCrypt = require('bcrypt-nodejs');

//do i need to require passport , local strategy and db = require('../models') her or in the server file seen it done both ways

//initialize passport-local strategy and the user model
//that is passed an argument
module.exports = function(passport,user){

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

//serialize passport   creates the cookie
passport.serializeUser(function(user, done) {
    done(null, user.id);
});


// // used to deserialize the user -reads the cookie -ex. take the attribute you defined ex username.id and look up user returning as object 
// //allowing you to use ex  request.user and have ability to work and modify user
// passport.deserializeUser(function(id, done) {
    
//     //sequelize findById promise to get the user and if successful
//     //instance of sequelize model is returned.  
//     User.findById(id).then(function(user) {
        
//         if (user) {
//             done(null, user.get());
//         } else {
//             done(user.errors,null);
//         }
//     });

// });
// //define our custom strategy with our LocalStrategy declaring 
// //the (req) fields username and password
// //look up by userid or username
//     passport.use('local-signup', new LocalStrategy(

//     {           
//         emailField : 'email',// changed from usernameField to emailField does this need to be username
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass back the entire request to the callback
//     },
// //storing users detail
//     function(req, email, password, done) {
//         var generateHash = function(password) {
//         return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
//         };

//     //check the sequelize model User to see if user already exists and if not add them
//     User.findOne({where: {email:email}}).then(function(user) {

//         if(user) {
//             console.log('user found = ', user);
//             return done(null, false, { message: 'That email is already taken' });
        
//         }else {
//             console.log('creating new user');
//             var userPassword = generateHash(password);
//             //values in data object are from the req.body object that contains sign up form
//             var data = { 
//                 email:email,  //signup-email 
//                 password:userPassword,  //signup-password
//                 name: req.body.name, //changed from firstname: to name:
//                 //lastname: req.body.lastname 
//                 //do i need all of the below? 
//                 //phone: req.body.//added 
//                 //city: req.body.city//added
//                 //state: req.body.state//added
//                 //skills: req.body.skills//added 
//                 //inputCity
//                 //inputState
//                 //do we need to pull through all the data here being requested for the new user or would that be separate from authentication
//             };
//     //sequelize method used to add the new user to database 
//     User.create(data).then(function(newUser,created){
//         if(!newUser){
//           return done(null,false);
//         }

//         if(newUser){
//           return done(null,newUser);
          
//         }


//       });
//     }


//   }); 

// }
    
// ));

// //local sign in strategy
// passport.use('local-signin', new LocalStrategy(
    
//     {
  
//     // by default, local strategy uses username and password, we will override with email
//     usernameField : 'email',  //changed from usernameField
//     passwordField : 'password',
//     passReqToCallback : true // allows us to pass back the entire request to the callback
//     },
  
//     function(req, email, password, done) {
  
//       var User = user;
//       //strategy that compares the password entered with the bCrypt comparison method
//       //since we stored our password in bcrypt
//       var isValidPassword = function(userpass,password){
        
//         return bCrypt.compareSync(password, userpass);
//       }
  
//       User.findOne({ where : { email: email}}).then(function (user) {
  
//                 if (!user) {
                    
//                     return done(null, false, { message: 'Email does not exist' });
//                 }
  
//                 if (!isValidPassword(user.password,password)) {
  
//                     return done(null, false, { message: 'Incorrect password.' }); 
//                 }
  
//                 var userinfo = user.get();
  
//                 return done(null,userinfo);
  
//         }).catch(function(err){
  
//             console.log("Error:",err);
  
//             return done(null, false, { message: 'Something went wrong with your Signin' });   
//         });
  
//     }
//     ));
}