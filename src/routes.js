const express = require('express');
const routes = express.Router();
const ProductControoler = require('./controllers/ProductController');

routes.get('/products', ProductControoler.index);
routes.post('/products', ProductControoler.store);
routes.get('/products/:id', ProductControoler.show);
routes.put('/products/:id', ProductControoler.update);
routes.delete('/products/:id', ProductControoler.destroy);

module.exports = routes;