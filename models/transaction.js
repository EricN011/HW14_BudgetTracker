const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bankSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for "
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Bank = mongoose.model("Bank", bankSchema);

module.exports = Bank;
