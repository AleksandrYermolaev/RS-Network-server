import { Schema, model } from 'mongoose';

const MessageModel = new Schema(
  {
    dialogId: { type: String },
    sender: { type: String },
    text: { type: String },
  }, { timestamps: true }
);

export default model('MessageModel', MessageModel);
