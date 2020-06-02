const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const connection = mongoose.connection;

const covidDB = connection.collection("covid19");

module.exports = covidDB;