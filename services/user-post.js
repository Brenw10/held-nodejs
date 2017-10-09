const Post = require('../models/post-collection');
const userFriend = require('./user-friend');

async function createPost(user, data) {
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

module.exports = {
    createPost: createPost
};