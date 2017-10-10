const express = require('express');
const graph = require('fbgraph');

const router = express.Router();

router.get('/', function (req, res) {
    graph.setAccessToken(req.headers['access-token']);
    graph.get('me?fields=id,name,email,age_range,timezone,locale', (err, data) => res.send(data));
});

module.exports = router;