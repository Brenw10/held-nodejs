const graph = require('fbgraph');

function isUserAuthenticated(req, res, next) {
    graph.setAccessToken(req.headers['access-token']);
    graph.get('me?fields=id,name,email,age_range,timezone,locale', function (err, data) {
        if (err) {
            res.sendStatus(401);
        } else {
            req.user = Object.assign(data, { token: req.headers['access-token'] });
            next();
        }
    });
}

module.exports = {
    isUserAuthenticated: isUserAuthenticated
};