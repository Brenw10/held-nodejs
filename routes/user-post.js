const express = require('express');

const userPostService = require('../services/user-post');

const router = express.Router();

router.post('/:user/post', function (req, res) {
    userPostService
        .createPost(req.user, req.body)
        .then(data => res.send(data))
        .catch(data => res.status(400).send({error: data}));
});

module.exports = router;