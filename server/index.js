const express = require("express")
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser")
const api = require("./api")
const router = require("./api")
const path = require("path");

const app = express()

app.listen(3000, () => {
    console.log('listening on 3000')
})

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', '../views');

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.use("/", api)