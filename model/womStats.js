const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statsSchema = new Schema({
  totalCases: { type: Number },
  deaths: { type: Number },
  recovered: { type: Number }
});

module.exports = mongoose.model('womStats', statsSchema);