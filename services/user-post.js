const Post = require('../models/post-collection');
const userFriend = require('./user-friend');

async function createPost(user, data) {
    if(!isValidPost(data)) return Promise.reject('Invalid data');

    const result = await userFriend.getFriends(user.token);
    const post = new Post({
        id: user.id,
        text: data.text,
        url: data.url,
        name: data.name,
        to: result.data
    });

    return post.save();
}

function isValidPost(post) {
    const hasContent = post.text || post.url;

    return hasContent;
}

module.exports = {
    createPost: createPost
};