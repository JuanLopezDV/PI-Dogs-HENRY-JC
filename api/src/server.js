const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { mainRouter } = require("./routes");
require("./db/db.js");

const server = express();

server.name = "API Backend Dogs";
server.use(helmet());

const whiteList = ["https://pi-dogsv1.juancalopez.dev"];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error({ message: "This site its private." }));
    }
  },
};

server.use(cors(options));

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));

server.use(express.json());

server.use("/api/v1", mainRouter);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
