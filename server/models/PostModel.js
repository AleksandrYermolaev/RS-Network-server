import { Schema, model } from 'mongoose';

const PostModel = new Schema({
  userId: { type: String, required: true },
  date: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String },
  likes: { type: [String] },
  comments: { type: [String] },
});

export default model('PostModel', PostModel);
