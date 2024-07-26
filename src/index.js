// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
const app = express();
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running at PORT: ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection fail at index", error);
  });
