const mysql = require('mysql2');


require('dotenv').config();

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'employee_db',
});

module.exports = connection;