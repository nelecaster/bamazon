CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_ID INTEGER(10),
name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(10),
stock_quantity INTEGER(10)
);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (1, "yo-yo", "toys", 3, 100);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (2, "Iphone", "electronics", 500, 222);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (3, "mountain bike", "sporting goods", 200, 20);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (4, "blue jeans", "clothing", 50, 500);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (5, "guitar", "musical instruments", 300, 30);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (6, "tent", "camping gear", 100, 93);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (7, "cast-iron skillet", "kitchen", 70, 400);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (8, "jumper cables", "automotive", 20, 350);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (9, "potato chips", "grocery", 1, 100);

INSERT INTO products (item_ID, name, department_name, price, stock_quantity)
VALUES (10, "toothbrush", "health", 2, 130);



SELECT * FROM bamazon.products;