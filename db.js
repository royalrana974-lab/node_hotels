const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/newhotels"

mongoose.connect("mongodb://localhost:27017/newhotels")
  .then(() => console.log("MongoDB connected!!!"))
  .catch(err => console.error("MongoDB connection error:", err));
const db = mongoose.connection;

module.exports = db;