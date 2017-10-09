const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/held');

const schema = new mongoose.Schema({
    id: {type: String, required: true},
    url: {type: String, default: null},
    name: {type: String, default: null},
    text: {type: String, default: null, maxlength: 300},
    datetime: {type: Date, default: Date.now},
    to: [
        {
            id: {type: String, require: true},
            name: {type: String, require: true}
        }
    ],
    comments: [
        {
            _id: {type: mongoose.Schema.ObjectId, default: new mongoose.Types.ObjectId()},
            id: {type: String, required: true},
            text: {type: String, require: true, maxlength: 300},
            likes: [String],
            datetime: {type: Date, default: Date.now},
        }
    ],
    likes: [String]
});

module.exports = mongoose.model('postCollection', schema, 'postCollection');