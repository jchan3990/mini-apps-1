const db = require('../db/index.js');
const model = require('./model.js');

module.exports = {
  createAccount: function(req, res) {
    model.createAccount(req.body.name, req.body.email, req.body.password, (err, result, field) => {
      if (err) {
        res.status(400).send('Could not create account');
      } else {
        res.status(201).send('Account created');
      }
    });
  },
  createShipping: function(req, res) {
    model.createShipping(req.body.streetOne, req.body.streetTwo, req.body.city, req.body.state, req.body.zip, req.body.phone, (err, result, field) => {
      if (err) {
        res.status(400).send('Could not add shipping address');
      } else {
        res.status(201).send('Shipping address added');
      }
    });
  },
  createCc: function(req, res) {
    model.createCc(req.body.number, req.body.cvv, req.body.zip, (err, result, field) => {
      if (err) {
        console.log(err)
        res.status(400).send('Could not add CC');
      } else {
        res.status(201).send('CC added');
      }
    });
  }
}