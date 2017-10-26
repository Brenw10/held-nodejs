const express = require('express');
const userPost = require('../../services/user-post');

const router = express.Router();

router.get('/', function (req, res) {
    userPost
        .getPosts(req.user.id)
        .then(data => res.send(data));
});

module.exports = router;