const express = require('express');
const post = require(`${process.env.PWD}/src/post`);

const router = express.Router();

const testToken = 'EAAGcDkc4QZC0BALR0orgNzP3smGTrlqKWPPXrNXqaKA6pY3P5PZAgx8aA7VgAAekt724ErZCFpcA8hqRgZAlcJUTPcP5ndW1moPjiBOicMBX6tDhOuQ5LMaBL85fr0Nrsqueq2kz5CY3YIeWHybNVbu5154eGKduVeXNxmOEPdLkoZCA4BSjZAeuk11lqO2l0ZD';

router.get('/post', (req, res) => {
  post.getPosts(testToken).then(posts => res.send(posts));
});

module.exports = router;  