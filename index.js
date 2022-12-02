const { Socket } = require('engine.io');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile('/Users/maxmorgenbesser/socket.io/index.html');
  });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log(msg)
      io.emit('chat message', msg);
    });
  });
  
server.listen(3002, () => {
  console.log('listening on port: 3002');
});