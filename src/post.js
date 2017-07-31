const graph = require('fbgraph');

const user = require(`${process.env.PWD}/src/user`);
const db = require('./mongodb');
const util = require('./util');

const getPosts = token => {
    return user.getUser(token).then(user => {
        return db.Mongoose
            .model('postCollection', db.PostSchema, 'postCollection')
            .find({ to: user.id })
            .lean()
            .exec((err, posts) =>
                posts
                    .map(util.removeKeyFromObject('uid'))
                    .map(util.removeKeyFromObject('to'))
            );
    });
}

module.exports = {
    getPosts: getPosts,
}