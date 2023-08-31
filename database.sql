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

INSERT INTO products (id, name, stock, price, category_id)
VALUES ('P0001', 'Buku', 1000, 10, 'K1'),
       ('P0002', 'Pulpen', 1200, 10, 'K1'),
       ('P0003', 'Pensil', 2000, 10, 'K1'),
       ('P0004', 'Tas', 10000, 10, 'K1'),
       ('P0005', 'Kertas', 500, 10, 'K1');


SELECT *
FROM products