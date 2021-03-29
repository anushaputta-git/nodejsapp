'use strict';
const sql = require('mssql');

const config = {
  server: 'nimbussqlserver.database.windows.net',
  user: 'nimbus',
  password: 'Nmbs2021',
  database: 'nimbussqldb'
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};