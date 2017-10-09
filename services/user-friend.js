const graph = require('fbgraph');

function getFriends(token) {
    return new Promise(function (resolve) {
        graph.setAccessToken(token);
        graph.get('me/friends', (err, data) => resolve(data));
    });
}

module.exports = {
    getFriends: getFriends
};