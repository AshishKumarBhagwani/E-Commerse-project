const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


// Model for Adding Products
const productModel = new Schema({
    name : String,
    brand : String
})

module.exports = mongoose.model('Products',productModel);