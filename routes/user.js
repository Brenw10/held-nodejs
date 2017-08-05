const express = require('express');
const user = require(`${process.env.PWD}/src/user`);

const router = express.Router();

router.get('/user', (req, res) => {
  const token = req.headers['access-token'];
  user.getUser(token).then(user => res.send(user));
});

router.get('/user/friends', (req, res) => {
  const token = req.headers['access-token'];
  user.getFriends(token).then(friends => res.send(friends));
});

module.exports = router;