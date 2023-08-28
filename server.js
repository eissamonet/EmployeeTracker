const inquire = require('inquirer');
const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

require('dotenv').config()

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: process.env.PWS,
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

//  prompt user to answer questions
function promptUser () {
  return inquire.prompt([
    {
      type: 'list',
      name: 'options',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ])
    
  
    .then((answers) => {
      switch (answers.options) {
        case 'View all departments':
          viewDepartments();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployee();
          break;
        case 'Update an employee manager':
          updateManager();
          break;
        case 'Exit':
          db.end();
          break;
      }
    })
};

// view all departments
function viewDepartments() {
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
    promptUser();
  });
};

// view all employees
function viewEmployees() {
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
    promptUser();
  });
}

