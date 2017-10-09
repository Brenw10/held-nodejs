// App required libs
const express = require('express');
const bodyParser = require('body-parser');

// App configuration
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// App authentication
const auth = require('./services/auth');

// App routes
const user = require('./routes/user');
const userFriend = require('./routes/user-friend');
const userPost = require('./routes/user-post');

// App set routes
app.use('/user', auth.isUserAuthenticated, user);
app.use('/user', auth.isUserAuthenticated, userFriend);
app.use('/user', auth.isUserAuthenticated, userPost);

// Starting serve
app.listen(8080);

module.exports = app;