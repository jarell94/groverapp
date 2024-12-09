const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware for static files
app.use(express.static('public'));

// Simple authentication placeholder
app.post('/login', (req, res) => {
  // User authentication logic
  res.send("User authenticated");
});

// Real-time connection with Socket.IO
io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

mongoose.connect('mongodb://localhost:27017/socialApp', { useNewUrlParser: true });

server.listen(5000, () => console.log(`Server running on port 5000`));
