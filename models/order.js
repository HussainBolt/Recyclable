const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: {type: String, required: true, unique: true},
    item: itemtype
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Order', orderSchema);