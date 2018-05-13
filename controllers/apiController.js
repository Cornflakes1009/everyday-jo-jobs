let db = require('../models');

var getName = function (req, res, next) {
    // logic for the API end point

    // get model data

    // return data to route
    res.json({});
};

module.exports = getName;


// each api route will have its own func in the api controller

//____________________passport ______________
var exports = module.exports = {}


// //controller for sign up route
exports.signup = function(req,res, next){  //or do i render the index.js file
//   //signup id in signup.html for the input needed? 

  

    res.render('signup'); 

// }
// //controller for sign in route 
// exports.signin = function(req,res){
//     //this is on main.html in modal 
// 	res.render('signin'); 
//       //this is on main.html modal-email do we need a signin id? 
// }
// //this would be profile that would default to when sign in
// exports.dashboard = function(req,res){

// 	res.render('dashboard'); 

// }

// exports.logout = function(req,res){

//   req.session.destroy(function(err) {
//   res.redirect('/');
//   });

}