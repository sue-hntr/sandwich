// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var sandwich = {
    selectAll: function(cb) {
      orm.select("sandwiches", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insert("sandwiches", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.update("sandwiches", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

  module.exports = sandwich;