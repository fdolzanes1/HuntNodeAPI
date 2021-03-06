const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// Iniciando App
const app = express();
app.use(express.json());

// Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
  {
    useUnifiedTopology: true, 
    useNewUrlParser: true,     
    useCreateIndex: true 
  }
);
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));
app.listen('3000'); 