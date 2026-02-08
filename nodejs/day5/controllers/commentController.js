const Comment = require('../models/Comment');

exports.getMyComments = async (req, res) => {
  try {
    const comments = await Comment.find({ user: req.user.userId })
      .populate('post', 'title');
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createComment = async (req, res) => {
  try {
    const { content, postId } = req.body;
    const comment = await Comment.create({
      content,
      post: postId,
      user: req.user.userId
    });
    console.log(comment)
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findOneAndUpdate(
      { _id: id, user: req.user.userId },
      { content: req.body.content },
      { new: true }
    );

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found or unauthorized' });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findOneAndDelete({ _id: id, user: req.user.userId });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found or unauthorized' });
    }
    res.status(200).json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};