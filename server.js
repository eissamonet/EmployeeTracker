const inquire = require('inquirer');
const express = require('express');
const cTable = require('console.table');
const db = require('./db/connection');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  promptUser();
});

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
};

// view all roles
function viewRoles() {
  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
    promptUser();
  });
};

// add a department
function addDepartment() {
  inquire.prompt([
    {
      type: 'input',
      name: 'department_name',
      message: 'Enter the name of the department you want to add?'
    }
  ])
    .then((answers) => {
      db.query(`INSERT INTO department (department_name) VALUES ('${answers.department_name}')`, function (err, results) {
        console.log('Department added!');
        promptUser();
      });
    })
};

// add a role 
function addRole() {
  inquire.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role you want to add?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary of the role you want to add?'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter the department id of the role you want to add?'
    }
  ])
    .then((answers) => {
      db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answers.title}', '${answers.salary}', '${answers.department_id}')`, function (err, results) {
        console.log('Role added!');
        promptUser();
      });
    })
};

// add employee
function addEmployee() {
  inquire.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the employee you want to add.'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the last name of the employee you want to add.'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the role id of the employee you want to add.'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter the manager id of the employee you want to add.'
    }
  ])
    .then((answers) => {
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answers.first_name}', '${answers.last_name}', '${answers.role_id}', '${answers.manager_id}')`, function (err, results) {
        console.log('Employee added!');
        promptUser();
      });
    })
};

// update employee role
function updateEmployee() {
  inquire.prompt([
    
    {
      type: 'input',
      name: 'id',
      message: 'Enter the id of the employee you want to update.'
    },
      
    {
      type: 'input',
      name: "role_id",
      message: "What is the new role of the employee?"

    },
  ])
    .then((answers) => {
      db.query(`UPDATE employee SET role_id = '${answers.role_id}' WHERE id = '${answers.id}'`, function (err, results) {
        console.log('Employee updated!');
        promptUser();
      });
    })

};

// update an employee manager
function updateManager() {
  inquire.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Which employee would you like to update?'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'Enter the manager id of the employee you want to update.'
    }
  ])
    .then((answers) => {
      db.query(`UPDATE employee SET manager_id = '${answers.manager_id}' WHERE id = '${answers.employee_id}'`, function (err, results) {
        console.log('Employee updated!');
        promptUser();
      });
    })

};
