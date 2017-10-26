const express = require('express');
const post = require('../../services/post');

const router = express.Router();

router.get('/', function (req, res) {
    post
        .getPosts(req.user.id)
        .then(data => res.send(data));
});

module.exports = router;