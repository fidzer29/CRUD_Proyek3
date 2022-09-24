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
        ItemName: req.body.ItemName,
        ItemStatus: req.body.ItemStatus,
        ItemDateUpload: Date.now(),
        ItemExpired: Date.now(),
    })

    newItem.save((err, data) => {
        if (err) console.log(err)
        else res.send("Data Inserted")
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

// router.get('/read', (req, res) => {
//     ItemSchema.find((err, data) => {
//         if(err) console.log(err);
//         else{
//             res.send(data);
//         }
//     })
// })

router.get('/readfirst', (req, res) => {
    ItemSchema.findOne({ItemName:"Sepatu"}),
    (err, data) => {
        if(err) console.log(err);
        else res.send(data);
    }
})

router.delete('/delete', (req, res) => {
    ItemSchema.findByIdAndDelete((req.body.id), (err, data) =>{
        if(err) console.log(err)
        else{
            res.send(data);
            console.log("Data Deleted!");
        }
    })
})

router.put('/update', (req, res) => {
    ItemSchema.findByIdAndUpdate(req.body.id, {ItemName: req.body.name, ItemStatus: req.body.status, ItemExpired: req.body.expiredDate}, (err, data) => {
        if(err) console.log(err)
        else{
            res.send(data);
            console.log("Data Updated!");
        }
    })
})

module.exports = router