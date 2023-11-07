import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Group must have a name'],
    },
    description: {
      type: String,
      required: [true, 'Group must have a description'],
    },
    image: {
      type: String,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    simulations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Simulation',
      },
    ],
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Group', groupSchema);
