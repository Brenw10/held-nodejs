const graph = require('fbgraph');

const isTokenValid = token => {
    graph.setAccessToken(token);
    return new Promise(resolve => {
        graph.get('me?fields=id,name,email,age_range,timezone,locale', (err, res) => resolve(err))
    });
}

const getUser = token => {
    graph.setAccessToken(token);
    return new Promise(resolve => {
        graph.get('me?fields=id,name,email,age_range,timezone,locale', (err, res) => resolve(res))
    });
}

const getFriends = token => {
    graph.setAccessToken(token);
    return new Promise(resolve => {
        graph.get('me/friends', (err, res) => resolve(res))
    });
}

module.exports = {
    isTokenValid: isTokenValid,
    getUser: getUser,
    getFriends: getFriends,
}