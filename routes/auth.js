const express = require('express');
const router = express.Router();

router.get('/auth', (req, res) => {
  res.send('Ta mais liso que o batman');
});

module.exports = router;
