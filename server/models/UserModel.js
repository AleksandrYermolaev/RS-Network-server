import { Schema, model } from 'mongoose';

const UserModel = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  image: { type: String, default: '' },
  age: { type: Number, default: 0 },
  location: { type: String, default: '' },
  followers: { type: [String] },
  password: { type: String, required: true },
  about: { type: String, default: '' },
});

export default model('UserModel', UserModel);
