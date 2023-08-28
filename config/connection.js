const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: process.env.PASSWORD,
  database: 'employee_db'
});

module.exports = connection;