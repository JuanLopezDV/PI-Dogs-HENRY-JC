const express = require("express");
const {
  handlerGetTemperaments,
} = require("../controllers/handlerGetTemperaments");
const temperamentRouter = express.Router();

temperamentRouter.get("/", handlerGetTemperaments);

module.exports = { temperamentRouter };
