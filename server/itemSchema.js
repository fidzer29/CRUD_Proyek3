const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    ItemId: String,
    ItemName: String,
})

module.exports = mongoose.model('Toko', ItemSchema,'barang')