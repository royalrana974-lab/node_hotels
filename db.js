const mongoose = require("mongoose");
require('dotenv').config();

// const mongoURL = "mongodb://localhost:27017/newhotels"
// const mongoURL = "mongodb+srv://royalrana974_db_user:foXuHJQMUxgzJKxy@nodeproject.q6s3dhe.mongodb.net/"
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
  .then(() => console.log("MongoDB connected!!!"))
  .catch(err => console.error("MongoDB connection error:", err));
const db = mongoose.connection;

module.exports = db;