const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.get("/", (req, res) => res.send("Monopoly Backend Running"));

const players = {};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  players[socket.id] = { position: 0 };

  socket.on("rollDice", () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    players[socket.id].position += diceRoll;
    io.emit("movePlayer", { playerId: socket.id, newPosition: players[socket.id].position });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    delete players[socket.id];
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
