const express = require("express");
const mainRouter = require("./routes/route");
const morgan = require("morgan");

const server = express();

server.use(morgan("dev"));
server.use(mainRouter);

module.exports = server;
