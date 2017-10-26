const express = require('express');
const userPost = require('../../services/user-post');

const router = express.Router();

router.post('/:user/post', function (req, res) {
    userPost
        .createPost(req.user, req.body)
        .then(data => res.send(data))
        .catch(data => res.status(400).send({ error: data }));
});

router.get('/:user/posts', function (req, res) {
    userPost
        .getUserPosts(req.user.id)
        .then(data => res.send(data));
});

router.post('/:user/post/:post/like', function (req, res) {
    userPost
        .addLike(req.user.id, req.params.post)
        .then(data => res.send(data));
});

router.delete('/:user/post/:post/like', function (req, res) {
    userPost
        .removeLike(req.user.id, req.params.post)
        .then(data => res.send(data));
});

module.exports = router;