import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    simulations: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Simulation',
    },
    phishedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    learningMaterials: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Learning',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Report', reportSchema);
