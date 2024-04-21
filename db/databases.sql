CREATE DATABASE IF NOT EXISTS companiadb;

USEA COMPANIA;

CREATE TABLE employee(
    id INT (11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(10) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES 
(4, 'John', 1000),
(5, 'Paul', 2000),
(6, 'Ringo', 3000),
(7, 'George', 4000);