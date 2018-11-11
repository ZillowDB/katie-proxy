const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/index.js');
const db = require('../db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static(__dirname + '/../client/dist/'));


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('working on ', port);
});