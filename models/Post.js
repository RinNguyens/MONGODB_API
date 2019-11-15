const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    title : {
        type : String,
        required : false
    },
    body : {
        type : String,
        required : false
    },
    create_at : {
        type : Date,
        default : Date.now
    }
});

const Post = module.exports = mongoose.model('Post',PostSchema);