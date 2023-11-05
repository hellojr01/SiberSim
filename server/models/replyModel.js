import mongoose from 'mongoose';

const replySchema = new mongoose.Schema(
  {
    body: {
      type: String,
      required: [true, 'Reply must have a body'],
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
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Reply', replySchema);
