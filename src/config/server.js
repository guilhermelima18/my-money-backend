const express = require("express");
const bodyParser = require("body-parser");
const allowCors = require("./cors");
const queryParser = require("express-query-int");
const server = express();

const port = 5000;
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

server.listen(port, () => {
  console.log(`Backend running on port ${port}.`);
});

module.exports = server;
