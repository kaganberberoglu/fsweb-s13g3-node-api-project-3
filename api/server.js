const express = require('express');

const server = express();
const mw = require("./middleware/middleware");
const userRouter = require("./users/users-router");

server.use(express.json());
server.use(mw.logger);

server.use("/api/users", userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Biraz ara yazılım yazalım!</h2>`);
});

module.exports = server;
