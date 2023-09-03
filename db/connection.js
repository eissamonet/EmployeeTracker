const mysql = require('mysql2');


require('dotenv').config();

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'J5o1ck36!',
  database: 'employee_db',
});

module.exports = connection;