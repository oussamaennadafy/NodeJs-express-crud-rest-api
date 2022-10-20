const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  depart_city: {
    type: String,
    required: true,
    unique: false,
  },
  arrive_city: {
    type: String,
    required: true,
    unique: false,
  },

  depart_date: {
    type: String,
    required: true,
    unique: false,
  },
  arrive_date: {
    type: String,
    required: true,
    unique: false,
  },
  price: {
    type: Number,
    required: true,
    unique: false,
  },
});

const tripdb = mongoose.model("tripdb", schema);

module.exports = tripdb;
