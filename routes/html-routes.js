var connection = require("../config/connection.js");
var path = require("path")

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/main.html"));
      });
  
      app.get("/profile", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/profile.html"));
      });

      app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/signup.html"));
      });
  };