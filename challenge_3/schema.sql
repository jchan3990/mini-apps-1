CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE shipping (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId INT DEFAULT NULL,
  streetOne VARCHAR(255) NOT NULL,
  streetTwo VARCHAR(255),
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip INT NOT NULL,
  phone VARCHAR(40) NOT NULL,

  FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

CREATE TABLE cc (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId INT DEFAULT NULL,
  number varchar(40) NOT NULL,
  cvv INT NOT NULL,
  zip INT NOT NULL,

  FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE
);
