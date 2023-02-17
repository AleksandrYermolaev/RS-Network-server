import { Schema, model } from 'mongoose';

const DialogModel = new Schema(
  {
    members: { type: [String] },
  },
  { timestamps: true }
);

export default model('DialogModel', DialogModel);
