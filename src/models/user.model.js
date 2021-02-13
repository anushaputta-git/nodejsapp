'use strict';
var dbConn = require('./../../config/db.config');

//User object create
var User = function(user){
  this.firstname     = User.firstname;
  this.lastname      = User.lastname;
  this.email         = User.email;
  this.password      = User.password;
};

User.create = function (newuser, result) {
var sql = 'insert ignore into ucuser set ?';
dbConn.query(sql, newuser, function (err, res) {
if(err) {
  console.log('error: ', err);
  result(err, null);
}
else{
  console.log(res);
  result(null, res);
}
});
};

User.findById = function (email, result) {
  var sql = 'select * from ucuser where email = ?';
  dbConn.query(sql, email, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
};

User.findAll = function (result) {
dbConn.query("select * from ucuser", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('Users : ', res);
  result(null, res);
}
});
};


module.exports= User;