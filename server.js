const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando App
const app = express();

// Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
requireDir('./src/models');

const Product = mongoose.model('Product');

// Rota
app.get('/', (req, res) => {
  Product.create({
    title: 'React', 
    description: 'Build native apps', 
    url: 'reactjs.io'
  });
  res.send('Hello Rockeseat');
});
app.listen('3000');