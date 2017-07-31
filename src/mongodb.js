const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/held');

var postSchema = new mongoose.Schema(
    {
        uid: String,
        url: String,
        text: String,
        to: [String]
    },
    {
        collection: 'postCollection'
    }
);

module.exports = { Mongoose: mongoose, PostSchema: postSchema }