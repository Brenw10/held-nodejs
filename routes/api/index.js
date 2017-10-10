const express = require('express');

const router = express.Router();

// App user hierarchy routes
const user = require('./user');
const userFriend = require('./user-friend');
const userPost = require('./user-post');

router.use('/user', user);
router.use('/user', userFriend);
router.use('/user', userPost);

module.exports = router;