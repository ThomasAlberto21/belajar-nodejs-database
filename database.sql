CREATE TABLE sample
(
    id   VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE Innodb;



CREATE TABLE customers
(
    id    VARCHAR(100) NOT NULL,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    CONSTRAINT customers_email_unique UNIQUE (email),
    CONSTRAINT customers_phone_unique UNIQUE (phone),
    PRIMARY KEY (id)
) ENGINE Innodb;


SELECT *
FROM customers;

CREATE TABLE products
(
    id          VARCHAR(100) NOT NULL,
    name        VARCHAR(100) NOT NULL,
    stock       INT          NOT NULL,
    price       INT          NOT NULL,
    category_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE Innodb;

INSERT INTO products (id, name, price, stock, category_id)
VALUES ('P0001', 'Buku', 1000, 10, 'K1'),
       ('P0002', 'Pulpen', 1200, 10, 'K1'),
       ('P0003', 'Pensil', 2000, 10, 'K1'),
       ('P0004', 'Tas', 10000, 10, 'K1'),
       ('P0005', 'Kertas', 500, 10, 'K1'),
       ('P0006', 'Tinta', 5000, 12, 'K2'),
       ('P0007', 'Lem', 10000, 11, 'K2'),
       ('P0008', 'Karton', 2500, 11, 'K2'),
       ('P0009', 'Sampul', 10000, 12, 'K2'),
       ('P0010', 'Materai', 12000, 15, 'K2');



SELECT *
FROM products;


CREATE TABLE categories
(
    id   INT          NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE Innodb;


CREATE TABLE wallet
(
    id          VARCHAR(100) NOT NULL,
    balance     INT          NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT wallet_id_unique UNIQUE (customer_id),
    PRIMARY KEY (id)
) ENGINE Innodb;


