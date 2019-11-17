const express = require('express');
const routes = express.Router();
const ProductControoler = require('./controllers/ProductController');

routes.get('/products', ProductControoler.index);
module.exports = routes;