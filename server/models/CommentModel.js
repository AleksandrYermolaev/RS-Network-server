import { Schema, model } from 'mongoose';

const CommentModel = new Schema({
  postId: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: Number, required: true },
  description: { type: String },
});

export default model('CommentModel', CommentModel);
