const graph = require('fbgraph');

const setAccessToken = token => {
    graph.setAccessToken(token);
}

const getCurrentUser = () => {
    return new Promise(resolve => {
        graph.get('me?fields=id,name,email,age_range,timezone,locale', (err, res) => resolve(res))
    });
}

module.exports = {
    setAccessToken: setAccessToken,
    getCurrentUser: getCurrentUser
}