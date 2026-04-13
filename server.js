require('dotenv').config();
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views/pug');

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
