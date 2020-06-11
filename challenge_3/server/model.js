const db = require('../db/index.js')

module.exports = {
  createAccount: function(name, email, password, callback) {
    let queryStr = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
    db.connection.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  createShipping: function(streetOne, streetTwo, city, state, zip, phone, callback) {
    let queryStr = `INSERT INTO shipping (streetOne, streetTwo, city, state, zip, phone) VALUES ('${streetOne}', '${streetTwo}', '${city}', '${state}', ${zip}, ${phone})`;
    db.connection.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  createCc: function(number, cvv, zip, callback) {
    let queryStr = `INSERT INTO cc (number, cvv, zip) VALUES ('${number}', ${cvv}, ${zip})`;
    db.connection.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
}