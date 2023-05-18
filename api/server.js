const express = require('express');
const mw = require("./middleware/middleware");
const userRouter = require("./users/users-router");

const server = express();
server.use(express.json());

server.use(mw.logger);

server.get('/', (req, res) => {
  res.send(`<h2>Biraz ara yazılım yazalım!</h2>`);
});

server.use("/api/users", userRouter);

module.exports = server;
