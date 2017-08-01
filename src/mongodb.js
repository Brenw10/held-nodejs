const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/held');

// todo: Export schemas to model folder
var postSchema = new mongoose.Schema(
    {
        uid: { type: String, required: true },
        url: { type: String, default: null },
        text: { type: String, default: null, maxlength: 150 },
        datetime: { type: Date, default: Date.now },
        to: [String],
        comments: [
            {
                text: { type: String, require: true, maxlength: 150 },
                likes: [String],
                datetime: { type: Date, default: Date.now },
            }
        ],
        likes: [String]
    },
    {
        collection: 'postCollection'
    }
);

module.exports = { Mongoose: mongoose, PostSchema: postSchema }