const express = require("express");
const { dogsRouter } = require("./dogsRouter");
const { temperamentRouter } = require("./temperamentsRouter");

const mainRouter = express.Router();

mainRouter.use("/dogs", dogsRouter);
mainRouter.use("/temperaments", temperamentRouter);

mainRouter.get("/", (req, res) => {
  res.status(200).json({ status: "Server Online" });
});

module.exports = { mainRouter };
