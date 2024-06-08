const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/welding-helmet"
);

module.exports = mongoose.connection;
