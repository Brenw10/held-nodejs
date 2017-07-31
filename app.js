const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const auth = require('./routes/auth');
const user = require('./routes/user');
const post = require('./routes/post');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', auth);
app.use('/api', user);
app.use('/api', post);

app.listen(8080);

module.exports = app;
