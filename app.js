const express = require('express')
const app = express()
const port = require('./config')

app.get('/', (req, res) => res.json({"Text":'Hello World!', "Version":"1"}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))