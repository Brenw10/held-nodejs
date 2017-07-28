const express = require('express');
const auth = require(`${process.env.PWD}/src/auth`);

const router = express.Router();

const testToken = 'EAACEdEose0cBAAj0tmMVI80ZCVl9V27ErTeYVOcKEP4gKqFMAwR1EWqQXY4YPc4xJLt3EEnWlU7w7tiUQzx32rgN29gTQ0R5QmDThNj8hUs94VEqkPcIgo3EDVXJZAyoXBIdHGI5PFwhtkqiTZAGVaeEWyaehCl0PzPnqHjuprhOZAhpCwBMaa4p6RZBkB7YZD';

router.get('/auth', (req, res) => {
  auth.setAccessToken(testToken);
  auth.getCurrentUser().then(user => {
    res.send(user);
  });
});

module.exports = router;  