const express = require('express');
const post = require('../../services/post');

const router = express.Router();

router.post('/:post/like', function (req, res) {
    post
        .addLike(req.user.id, req.params.post)
        .then(data => res.send(data));
});

router.delete('/:post/like', function (req, res) {
    post
        .removeLike(req.user.id, req.params.post)
        .then(data => res.send(data));
});

module.exports = router;