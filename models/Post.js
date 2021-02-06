const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Please type in a title"]
    },
    author: {
        type: String,
        require: [true, "Please type in a auther"]
    },
    body: {
        type: String,
        require: [true, "Please type in a body"]
    }
})

const Post = mongoose.model("Post", PostSchema, "Posts")
module.exports = Post;