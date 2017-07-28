const express = require('express');
const auth = require(`${process.env.PWD}/src/auth`);

const router = express.Router();

const testToken = 'EAAGcDkc4QZC0BAEU7U63XeUivWfDv9CUCIKz7IAcyZCmBylylJfyBZAzjUirYcIp35PIZBca8AQES6KCdyrcZBAkAsAfsICjWZAeZCKy5DTYeQ9U2931Vtxjya9umj9it5dFbcxQXPwxrL1zBlforwRMpdq4GX8U08QR2BisZCCAMEEQhWsoTFycmM2YaZAHpKCsZD';

router.get('/auth', (req, res) => {
  auth.setAccessToken(testToken);
  auth.getCurrentUser().then(user => {
    res.send(user);
  });
});

module.exports = router;  