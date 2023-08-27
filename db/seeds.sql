INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 1),
       ("Salesperson", 80000.00, 1),
       ("Lead Engineer", 150000.00, 2),
       ("Software Engineer", 120000.00, 2),
       ("Accountant", 125000.00, 3),
       ("Legal Team Lead", 250000.00, 4),
       ("Lawyer", 190000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("David ", "Blain", 1, NULL),
       ("Samuel", "Roberts", 2, 1),
       ("Cynthia", "Rodriguez", 3, NULL),
       ("Kevin", "Bacon", 4, 3),
       ("Malia", "Brown", 5, NULL),
       ("Sarah", "Steward", 6, 5),
       ("Tom", "Hanky", 7, 5),
       ("Samantha", "Jones", 8, 5);