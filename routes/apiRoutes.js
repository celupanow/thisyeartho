//This is our api routes file. It will send requests to our database and return the info. 
//This is basically the sequelize ORM making it so we don't have to write sql statements.
//This is still the basic example file, so none of this code currently does anything.

var db = require("../models");

module.exports = function(app) {
  // This is how to get everything from a table to display
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);ß
    });
  });

  // This is our post route that is adding an item to a table
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // This is a delete route that removes an item based on its id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
