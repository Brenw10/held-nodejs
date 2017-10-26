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

function getPosts(userId) {
    return Post
        .find({ $or: [{ id: userId }, { to: userId }] })
        .select('-id -likes -comments -to')
        .sort({ datetime: -1 })
        .lean()
        .exec((err, data) => data);
}

function getUserPosts(userId) {
    return Post
        .find({ $or: [{ id: userId }] })
        .select('-id -likes -comments -to')
        .sort({ datetime: -1 })
        .lean()
        .exec((err, data) => data);
}

function addLike(userId, postId) {
    return Post
        .findByIdAndUpdate(postId, { $addToSet: { likes: userId } }, { new: true })
        .select('-id -likes -comments -to')
        .lean().exec((err, post) => post);
}

function removeLike(userId, postId) {
    return Post
        .findByIdAndUpdate(postId, { $pull: { likes: userId } }, { new: true })
        .select('-id -likes -comments -to')
        .lean().exec((err, post) => post);
}

isValidPost = post => post.text || post.url;

module.exports = {
    createPost: createPost,
    getPosts: getPosts,
    getUserPosts: getUserPosts,
    addLike: addLike,
    removeLike: removeLike
};