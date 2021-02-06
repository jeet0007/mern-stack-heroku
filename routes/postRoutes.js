const express = require('express');
const router = express.Router();
const postContorller = require("../controllers/postController");
router.route('/').get(postContorller.getAllPosts);

module.exports = router;

