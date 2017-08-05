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

module.exports = router;