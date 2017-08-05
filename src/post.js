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
            );
    });
}

const setPost = (user, friends, data) => {
    return new Promise(resolve => {
        const Post = db.Mongoose.model('postCollection', db.PostSchema, 'postCollection');
        const post = new Post({
            uid: user.id,
            url: data.url,
            text: data.text,
            to: friends.data
                .map(util.removeKeyFromObject('name'))
                .map(list => list.id)
        });

        post.save(err => resolve(err));
    });
}

const validSetPost = (user, friends, data) => {
    if ([null, undefined].indexOf(data.url) >= 0 && [null, undefined].indexOf(data.text) >= 0)
        return false;
    if (user.error || friends.error)
        return false;
    if ([null, undefined].indexOf(data.text) === -1 && data.text.length > 300)
        return false;
    return true;
}

const handleSetPost = async (token, data) => {
    const currentUser = await user.getUser(token);
    const userFriends = await user.getFriends(token);

    return new Promise(resolve => {
        if (!validSetPost(currentUser, userFriends, data)) {
            resolve(true);
        }
        setPost(currentUser, userFriends, data).then(err => resolve(err));
    });
}

module.exports = {
    getPosts: getPosts,
    handleSetPost: handleSetPost,
}