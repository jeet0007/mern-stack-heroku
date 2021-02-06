const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
    try {
        let query = Post.find();
        const result = await query;

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: "Server Error"
        });
    }
};
