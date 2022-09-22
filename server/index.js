const express = require("express")
const bodyParser = require("body-parser")
const api = require("./api")
const router = require("./api")
const path = require("path")

const app = express()

app.listen(3000, () => {
    console.log('listening on 3000')
})

app.set('view_engine', 'hbs');

app.set('client', path.join(__dirname))

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use("/api", api)