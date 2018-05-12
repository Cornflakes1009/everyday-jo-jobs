
var apiController = require('../controllers/apiController');
// Routes
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

  // app.get("/api/names/:id?", apiController.getName);

//   // POST route for saving a new todo
//   app.post("/api/todos", function(req, res) {
//     console.log(req.body);
//     // create takes an argument of an object describing the item we want to
//     // insert into our table. In this case we just we pass in an object with a text
//     // and complete property (req.body)
//     db.Todo.create({
//       text: req.body.text,
//       complete: req.body.complete
//     }).then(function(dbTodo) {
//       // We have access to the new todo as an argument inside of the callback function
//       res.json(dbTodo);
//     });
//   });

//   // DELETE route for deleting todos. We can get the id of the todo we want to delete from
//   // req.params.id
//   app.delete("/api/todos/:id", function(req, res) {

//   });

//   // PUT route for updating todos. We can get the updated todo from req.body
//   app.put("/api/todos", function(req, res) {

//   });
};
//routes for sign up, sign in and log out
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


