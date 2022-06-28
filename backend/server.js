const express = require('express');
const app = express();

const http = require('http');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const socketServer = require('./socketServer');

const authRoutes = require('./routes/authRoutes');
const friendInvitationRoutes = require('./routes/friendInvitationRoutes');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// register the routes
app.use('/api/auth', authRoutes);
app.use('/api/friend-invitation', friendInvitationRoutes);

const server = http.createServer(app);

socketServer.registerSocketServer(server);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT} .....`);
    });
  })
  .catch((err) => {
    console.log('database connection failed. Server not started');
    console.error(err);
  });

