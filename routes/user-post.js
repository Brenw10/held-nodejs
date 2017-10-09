const express = require('express');

const userPostService = require('../services/user-post');

const router = express.Router();

router.post('/:user/post', async function (req, res) {
    userPostService
        .createPost(req.user, req.body)
        .then(data => res.send(data));
});

module.exports = router;