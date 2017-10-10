const express = require('express');
const graph = require('fbgraph');

const userFriend = require('../../services/user-friend');

const router = express.Router();

router.get('/:user/friends', function (req, res) {
    userFriend
      .getFriends(req.user.token)
      .then(data => res.send(data));
});

module.exports = router;