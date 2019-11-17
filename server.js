const express = require('express');
const mongoose = require('mongoose');
// Iniciando App
const app = express();

// Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// Rota
app.get('/', (req, res) => {
  res.send('Hello Rockeseat');
});
app.listen('3000');