### Schema

CREATE DATABASE sandwiches_db;
USE sandwiches_db;

CREATE TABLE sandwiches
(
	id int NOT NULL AUTO_INCREMENT,
	sandwich_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
