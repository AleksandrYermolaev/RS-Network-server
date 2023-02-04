import { Schema, model } from 'mongoose';

const UserModel = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String },
  age: { type: Number },
  location: { type: String },
  followers: { type: [String] },
  password: { type: String, required: true },
  about: { type: String },
});

export default model('UserModel', UserModel);
