CREATE DATABASE perntodo;


CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    category VARCHAR (50)
);


CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    note VARCHAR(255),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);



