const express = require('express');
const post = require(`${process.env.PWD}/src/post`);

const router = express.Router();

router.get('/post', (req, res) => {
  const token = req.headers['access-token'];
  post.getPosts(token).then(posts => res.send(posts));
});

module.exports = router;  