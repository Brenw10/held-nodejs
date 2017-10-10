const express = require('express');

const userPost = require('../../services/user-post');

const router = express.Router();

router.post('/:user/post', function (req, res) {
    userPost
        .createPost(req.user, req.body)
        .then(data => res.send(data))
        .catch(data => res.status(400).send({error: data}));
});

module.exports = router;