const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  mode: {
    type: String,
  },
  runTime: {
    type: String,
  },
  warnings: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
  },
  selectMode: {
    type: optionSchema,
  },
});

module.exports = mongoose.model('User', userSchema);
