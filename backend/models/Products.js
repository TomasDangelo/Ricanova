const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    descrpition: String,
    price: Number,
    category: String,
    image: String,
    stock: Number,
})

module.exports = mongoose.model('Product', producSchema); 

