const express = require('express')
const app = express()
const port = 3000

app.use(express.static('client'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/upload_json', (req, res) =>)

app.post('/upload_json', (req, res) => {});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))