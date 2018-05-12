
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
