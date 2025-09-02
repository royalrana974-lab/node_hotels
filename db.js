//  filepath: /var/www/html/Node/NODE_TUTORIAL/db.js
const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected!!!"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if the connection fails
  });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error("MongoDB connection error:", err);
});

db.once('open', () => {
  console.log("MongoDB connection is open.");
});

module.exports = db;
// const mongoose = require("mongoose");
// require('dotenv').config();

// // const mongoURL = "mongodb://localhost:27017/newhotels"
// // const mongoURL = "mongodb+srv://royalrana974_db_user:QEId428Lp1egke6A@firstnodeproject.lbnitv8.mongodb.net/"
// const mongoURL = process.env.MONGODB_URL;

// mongoose.connect(mongoURL, {
//   useNewUrlParser:true,
//   useUnifiedTopology:true,
// })
//   .then(() => console.log("MongoDB connected!!!"))
//   .catch(err => console.error("MongoDB connection error:", err));
// const db = mongoose.connection;

// module.exports = db;