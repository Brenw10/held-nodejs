const graph = require('fbgraph');

function isUserAuthenticated(token) {
    return new Promise(function (resolve, reject) {
        graph.setAccessToken(token);
        graph.get('me?fields=id,name,email,age_range,timezone,locale',
            (err, data) => err ? reject(err) : resolve(data)
        );
    });
}

function authenticate(req, res, next) {
    const token = req.headers['access-token'];
    isUserAuthenticated(token)
        .then(data => {
            req.user = Object.assign(data, { token: token });
            next();
        })
        .catch(err => res.status(401).send(err));
}

module.exports = {
    authenticate: authenticate
};