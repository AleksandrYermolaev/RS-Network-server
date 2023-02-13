import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { Server } from 'socket.io';
import http from 'http';

import router from './router.js';

dotenv.config();
const app = express();
const server = http.createServer(app);
const webSocket = new Server(server, {
  cors: {
    origin: process.env.CLIENT,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-type'],
  },
});
const DB_URL = process.env.MONGODB;

app.use(express.json());
app.use(express.static('static'));
app.use(
  cors({
    origin: [process.env.CLIENT],
  })
);
app.use(fileUpload());
app.use(router);

webSocket.on('connection', (socket) => {
  socket.on('new-post', (message) => {
    socket.broadcast.emit('new-post', message);
  });
  socket.on('del-post', (message) => {
    socket.broadcast.emit('del-post', message);
  });
});

function startApp() {
  try {
    mongoose.connect(DB_URL);
    server.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
startApp();
