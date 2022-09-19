const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema({
    ItemId: String,
    ItemName: String,
    ItemStatus: String,
    ItemDateUpload: Date,
    ItemExpired: Date,
})

module.exports = mongoose.model('Toko', ItemSchema,'barang')