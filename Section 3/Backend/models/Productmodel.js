const { Schema, model  } = require('../connection');

const mySchema = new Schema({
    name : String,
    category:String,
    price: Number,
    review: String,
    createdAt : { type: Date, default : Date.now }
});

module.exports = model( 'products', mySchema);