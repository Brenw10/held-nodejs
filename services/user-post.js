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
        to: result.data.map(item => item.id)
    });

    return post.save();
}

function isValidPost(post) {
    const hasContent = post.text || post.url;

    return hasContent;
}

function getPosts(user) {
    return Post
        .find({ $or: [{ id: user.id }, { to: user.id }] })
        .sort({ datetime: -1 })
        .lean()
        .exec((err, data) => data);
}

module.exports = {
    createPost: createPost,
    getPosts: getPosts
};