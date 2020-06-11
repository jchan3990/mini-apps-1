const path = require('path');
const express = require('express');
const Parse = require('body-parser');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/checkout/home', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));