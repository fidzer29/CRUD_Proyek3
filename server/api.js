const mongoose = require("mongoose")
const express = require("express")
const {v4: uuidv4} = require("uuid")
const router = express.Router()
const ItemSchema = require("./itemSchema")

const query = "mongodb://127.0.0.1:27017/"

const db = (query)
mongoose.Promise = global.Promise

mongoose.connect(db, (err) => {
    if(err) console.log("Error: " + err)
})

router.get('/save', (req, res) => {
    let newItem = new ItemSchema({
        ItemId: uuidv4(),
        ItemName: "Sepatu",
        ItemStatus: "Active",
        ItemDateUpload: Date.now(),
        ItemExpired: Date.now(),
    })

    newItem.save((err, data) => {
        if (err) console.log(err)
        else res.send("Data Inserted")
    })
})

module.exports = router