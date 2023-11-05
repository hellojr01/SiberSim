import mongoose from 'mongoose';

const simulationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Simulation must have a name'],
    },
    description: {
      type: String,
      required: [true, 'Simulation must have a description'],
    },
    testURL: {
      type: String,
      required: [true, 'Simulation must have a test URL'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Simulation', simulationSchema);
