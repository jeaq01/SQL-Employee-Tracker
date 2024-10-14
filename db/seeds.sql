INSERT INTO department (name)
VALUES ('finance'),
       ('IT'),
       ('HR'),
       ('management'),
       ('customer service');

INSERT INTO role (title,salary,department_id)
VALUES ('director', 8500,1),
       ('associate', 750,2),
       ('senior agent', 1500,3),
       ('operation manager', 1000,4),
       ('assistant manager', 500,5);
     
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ('john', 'doe', 1,NULL),
       ('luis', 'mercado', 2,NULL),
       ('julio', 'alvarado', 3,NULL),
       ('juan', 'smith', 4,NULL),
       ('luis', 'alvarez', 5,NULL);    