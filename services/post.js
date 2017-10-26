const Post = require('../models/post-collection');

function getPosts(userId) {
    return Post
        .find({ $or: [{ id: userId }, { to: userId }] })
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

function addComment(userId, postId, data) {
    const comment = { id: userId, text: data.text };
    return Post
        .findByIdAndUpdate(postId, { $push: { comments: comment } }, { new: true })
        .select('-id -likes -comments -to')
        .lean().exec((err, post) => post);
}

module.exports = {
    getPosts: getPosts,
    addLike: addLike,
    removeLike: removeLike,
    addComment: addComment
};