const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const auth = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', auth);
app.listen(8080);

module.exports = app;
