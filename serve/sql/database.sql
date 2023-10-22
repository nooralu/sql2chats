CREATE TABLE product
(
    id    INT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(255)   NOT NULL
);

CREATE TABLE warehouse
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE inventory_item
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    product_id   INT NOT NULL,
    warehouse_id INT NOT NULL,
    quantity     INT NOT NULL,
    purchasing_price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product (id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouse (id)
);

CREATE TABLE supplier
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE customer
(
    id      INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL
);

CREATE TABLE purchase
(
    id            INT AUTO_INCREMENT PRIMARY KEY,
    purchase_date DATE NOT NULL,
    product_id    INT  NOT NULL,
    quantity      INT  NOT NULL,
    unit_price    DECIMAL(10,2) NOT NULL,
    supplier_id   INT  NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product (id),
    FOREIGN KEY (supplier_id) REFERENCES supplier (id)
);

CREATE TABLE sale
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    sale_date   DATE NOT NULL,
    product_id  INT  NOT NULL,
    quantity    INT  NOT NULL,
    unit_price  DECIMAL(10,2) NOT NULL,
    customer_id INT  NOT NULL,
    warehouse_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES product (id),
    FOREIGN KEY (customer_id) REFERENCES customer (id),
    FOREIGN KEY (warehouse_id) REFERENCES warehouse (id)
);
