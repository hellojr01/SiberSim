import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter an unique username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Please enter a valid email address'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: 6,
  },
  avatar: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: 'user',
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  group: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
    },
  ],
});

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, 'sibersimulasi', {
    expiresIn: '30d',
  });
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);
