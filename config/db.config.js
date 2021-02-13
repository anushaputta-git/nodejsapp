'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'database-1.chk9qijt1q1u.us-east-2.rds.amazonaws.com',
    port:  '3306',
    user: 'admin',
    password: 'anushaputta',
    database: 'nodeapp',
    multipleStatements: true
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;