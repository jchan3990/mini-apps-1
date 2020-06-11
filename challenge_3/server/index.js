const controller = require('../server/controller.js')
const path = require('path');
const express = require('express');
const Parser = require('body-parser');
const app = express();
const port = 3000;

app.use(Parser.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/checkout/account', (req, res) => controller.createAccount(req, res));
app.post('/checkout/shipping', (req, res) => controller.createShipping(req, res));
app.post('/checkout/cc', (req,res) => controller.createCc(req,res));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));