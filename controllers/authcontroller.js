var exports = module.exports = {}
//do i need to import the model to use its database functions
//here or ok to have it synced in the server.js

//
//class is card possibly add a signup ID? 
//controller for sign up route
exports.signup = function(req,res, next){  //or do i render the index.js file
  //dont we need a action on the form and an id such as sign in? 
  

	res.render('signup'); 

}
//controller for sign in route 
exports.signin = function(req,res){

	res.render('signin'); 

}
//is this required 
exports.dashboard = function(req,res){

	res.render('dashboard'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}