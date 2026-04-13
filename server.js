'use strict';
require('dotenv').config();
const express = require('express');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views/pug');

fccTesting(app);
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});