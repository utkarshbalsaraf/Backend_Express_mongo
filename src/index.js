// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });
const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("Server running at PORT: ", port);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection fail at index", err);
  });
