const express = require('express');

const post = require(`${process.env.PWD}/src/post`);

const router = express.Router();

router.get('/posts', (req, res) => {
  const token = req.headers['access-token'];
  post.getPosts(token).then(posts => res.send(posts));
});

router.post('/post', (req, res) => {
  const token = req.headers['access-token'];
  post.handleSetPost(token, req.body)
    .then(invalid => res.sendStatus(!invalid ? 200 : 401));
});

router.post('/post/like', (req, res) => {
  //todo: check if user can like the post (his name should contain on to list)
  const token = req.headers['access-token'];
  post.setLike(token, req.body)
    .then(response => res.send(response));
});

router.delete('/post/like', (req, res) => {
  //todo: check if user can like the post (his name should contain on to list)
  const token = req.headers['access-token'];
  post.removeLike(token, req.body)
    .then(response => res.send(response));
});

module.exports = router;