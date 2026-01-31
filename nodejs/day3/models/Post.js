const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
  },
  content: {
    type: String,
    required: true,
    minlength: 10
  },
  author: {
    type: String,
    default: 'Anonymous',
    trim: true
  },
  tags: {
    type: [String],
    default: []
  }},{

      timestamps: true,
      versionKey: false // disable column __v
    }
);

module.exports = mongoose.model('Post', postSchema);