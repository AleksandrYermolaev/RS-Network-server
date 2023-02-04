import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router.js';

dotenv.config();
const app = express();
const DB_URL = process.env.MONGODB;

app.use(express.json());
app.use(cors());
app.use(router);

function startApp() {
  try {
    mongoose.connect(DB_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
startApp();
