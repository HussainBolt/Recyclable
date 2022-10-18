require('dotenv').config()
require('./config/database')

const Product = require('../models/product');
const Order = require('../models/order');

const data = require('./data')

const p1 = Product.deleteMany({})
const p2 = Order.deleteMany({})