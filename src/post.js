const graph = require('fbgraph');

const user = require('./user');
const db = require('./mongodb');
const util = require('./util');

const getPosts = token => {
    return user.getUser(token).then(user => {
        return db.Mongoose
            .model('postCollection', db.PostSchema, 'postCollection')
            .find({ $or: [{ uid: user.id }, { to: user.id }] })
            .sort({ datetime: -1 })
            .lean()
            .exec((err, posts) =>
                posts
                    .map(util.countArrayByObjectKey('likes', 'likesLength'))
                    .map(util.removeKeyFromObject('uid'))
                    .map(util.removeKeyFromObject('to'))
                    .map(util.removeKeyFromObject('likes'))
                    .map(util.removeKeyFromObject('comments'))
            );
    });
}

const setPost = (user, friends, data) => {
    return new Promise(resolve => {
        if (data.url === null && data.text === null || data.text.length > 300) resolve('error');

        const Post = db.Mongoose.model('postCollection', db.PostSchema, 'postCollection');
        const post = new Post({
            uid: user.id,
            url: data.url,
            text: data.text.trim(),
            to: friends.data
                .map(util.removeKeyFromObject('name'))
                .map(list => list.id)
        });

        post.save(err => resolve(err));
    });
}

const handleSetPost = (token, data) => {
    return Promise.all([
        user.getUser(token),
        user.getFriends(token)
    ]).then(snaps => setPost(snaps[0], snaps[1], data));
}

module.exports = {
    getPosts: getPosts,
    handleSetPost: handleSetPost,
}