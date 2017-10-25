const express = require('express');

const router = express.Router();

const user = require('./user');
const userFriend = require('./user-friend');
const userPost = require('./user-post');
const posts = require('./posts');

router.use('/user', user);
router.use('/user', userFriend);
router.use('/user', userPost);
router.use('/posts', posts);

module.exports = router;