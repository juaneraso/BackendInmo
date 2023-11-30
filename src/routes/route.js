const { Router } = require("express");

const mainRouter = Router();

mainRouter.get("/", (req, res) => {
  res.status(200).json({ message: "Hola Amigo" });
});

module.exports = mainRouter;
