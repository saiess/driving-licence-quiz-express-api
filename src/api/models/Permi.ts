import mongoose from 'mongoose';
import '../../database';

export interface PermiInput {
  question: string;
  answer: string;
  correctanswer: string;
}

export interface PermiDocument extends PermiInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

export const PermiSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: [
      {
        type: String,
        required: true,
      },
    ],
    correctanswer: {
      type: String,
      required: true,
    },
    vehicletype: {
          type: String,
          required: true,
    },
  },
  { timestamps: true }
);

const PermiModel = mongoose.model<PermiDocument>('Permi', PermiSchema);

export default PermiModel;