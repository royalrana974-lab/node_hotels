const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = "mongodb://127.0.0.1:27017/newhotels"; // use 127.0.0.1 instead of localhost

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected!!!"))
.catch(err => console.error("❌ MongoDB connection error:", err));

const db = mongoose.connection;
module.exports = db;



// const mongoose = require("mongoose");
// require('dotenv').config();

// // const mongoURL = "mongodb://localhost:27017/newhotels"
// const mongoURL = "mongodb+srv://royalrana974_db_user:mgsjaf226zLGfNYN@cluster0.nnom3if.mongodb.net/"
 
// mongoose.connect(mongoURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("MongoDB connected!!"))
//   .catch(err => console.error("MongoDB connection error:", err));
// const db = mongoose.connection;

// module.exports = db;