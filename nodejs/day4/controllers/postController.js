const Post = require('../models/Post');

// RULE: View only their own posts
exports.getMyPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.create({
      title,
      content,
      user: req.user.userId
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// RULE: Update only their own posts
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOneAndUpdate(
      { _id: id, user: req.user.userId }, // Query ensures ownership
      req.body,
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).json({ message: 'Post not found or unauthorized' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// RULE: Delete only their own posts
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findOneAndDelete({ _id: id, user: req.user.userId });

    if (!post) {
      return res.status(404).json({ message: 'Post not found or unauthorized' });
    }
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};