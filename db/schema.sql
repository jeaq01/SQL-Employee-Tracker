drop database if exists employee_database;
create database employee_database;
\c employee_database;


create table department(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);


create table role(

id SERIAL PRIMARY KEY,
title VARCHAR(30) UNIQUE NOT NULL, 
salary DECIMAL NOT NULL ,
department_id INTEGER NOT NULL, 
constraint fk_department foreign KEY (department_id) references department(id) on delete cascade 
);

create table employee(

id SERIAL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL, 
last_name VARCHAR(30) NOT NULL, 
role_id INTEGER NOT NULL, 
constraint fk_role foreign KEY (role_id) references role(id) on delete cascade, 
manager_id INTEGER,  
constraint fk_manager foreign KEY (manager_id) references employee(id) on delete cascade
);
