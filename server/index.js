const express = require("express")
const bodyParser = require("body-parser")
const api = require("./api")
const router = require("./api")

const app = express()

app.listen(3000, () => {
    console.log('listening on 3000')
})

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use("/api", api)