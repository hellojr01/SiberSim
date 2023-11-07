const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Post must have a title'],
    },
    body: {
      type: String,
      required: [true, 'Post must have a body'],
    },
    image: {
      type: String,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', postSchema);
