const express = require("express");
const app = express();
const connect = require("./Config/db");

const cartController = require("./Controllers/cart.controller");

app.use(express.json());
app.use("/cart", cartController);

const start = async (PORT) => {
  await connect();
  app.listen(PORT, () => {
    console.log("Current Server is Running on PORT", PORT);
  });
};

module.exports = start;
