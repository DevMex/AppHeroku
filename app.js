const express = require('express')
const app = express()
const port = require('./config')
const mongoose = require('mongoose')
const app = express()


mongoose.connect(configdatabase_url, { useNewUrlParser:true})
    .then(
        () => {
            console.log("Funciona")
        },
        err => {
            console.error(err)
          }
    )


app.get('/', (req, res) => res.json({"Text":'Hello World!', "Version":"1"}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))