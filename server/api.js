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

router.post('/input', (req, res) => {
    let newItem = new ItemSchema({
        ItemId: uuidv4(),
        ItemName: req.body.ItemName,
    })
    newItem.save((err, data) => {
        if (err) console.log(err)
        else {
            res.redirect('/')
        }
    })
})

router.get('/', (req, res) => {
    ItemSchema.find((err, data) => {
        if(err) console.log(err);
        else{
            res.render('home', {data: data});
        }
    })
})

router.post('/delete', (req, res) => {
    ItemSchema.findByIdAndDelete((req.body._Id), (err, data) =>{
        if(err) console.log(err)
        else{
            res.redirect('/')
        }
    })
})

router.post('/update', (req, res) => {
    ItemSchema.findByIdAndUpdate(req.body._Id, {ItemId: req.body.ItemId, ItemName: req.body.ItemName}, (err, data) => {
        if(err) console.log(err)
        else{
            res.redirect('/')
        }
    })
})

module.exports = router