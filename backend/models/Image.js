const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  caption: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Image', imageSchema);