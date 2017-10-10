// App required libs
const express = require('express');
const bodyParser = require('body-parser');

// App configuration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// App authentication
const auth = require('./services/auth');

// App API routes
const api = require('./routes/api');

// App set routes
app.use('/api', auth.authenticate, api);

// Starting serve
app.listen(8080);

module.exports = app;