const express = require('express');

const user = require(`${process.env.PWD}/src/user`);

const router = express.Router();

router.get('/auth', (req, res) => {
  const token = req.headers['access-token'];
  user.isTokenValid(token).then(invalid => res.sendStatus(!invalid ? 200 : 401));
});

module.exports = router;