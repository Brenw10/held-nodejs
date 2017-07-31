const express = require('express');
const user = require(`${process.env.PWD}/src/user`);

const router = express.Router();

const testToken = 'EAAGcDkc4QZC0BALR0orgNzP3smGTrlqKWPPXrNXqaKA6pY3P5PZAgx8aA7VgAAekt724ErZCFpcA8hqRgZAlcJUTPcP5ndW1moPjiBOicMBX6tDhOuQ5LMaBL85fr0Nrsqueq2kz5CY3YIeWHybNVbu5154eGKduVeXNxmOEPdLkoZCA4BSjZAeuk11lqO2l0ZD';

router.get('/auth', (req, res) => {
  user.isTokenValid(testToken).then(invalid => res.sendStatus(!invalid ? 200 : 401));
});

module.exports = router;  