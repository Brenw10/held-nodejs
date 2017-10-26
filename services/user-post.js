const Post = require('../models/post-collection');
const userFriend = require('./user-friend');

async function createPost(user, data) {
    if (!isValidPost(data)) return Promise.reject('Invalid data');

    const result = await userFriend.getFriends(user.token);
    const post = new Post({
        id: user.id,
        text: data.text,
        url: data.url,
        title: data.title,
        to: result.data.map(item => item.id)
    });

    return post.save();
}

function getUserPosts(userId) {
    return Post
        .find({ $or: [{ id: userId }] })
        .select('-id -likes -comments -to')
        .sort({ datetime: -1 })
        .lean()
        .exec((err, data) => data);
}

isValidPost = post => post.text || post.url;

module.exports = {
    createPost: createPost,
    getUserPosts: getUserPosts
};