const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  playerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Player'
  },
  weekend: {
    type: String,
    required: true,
    enum: ['Saturday', 'Sunday'],
  },
  available: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  }
});

module.exports = mongoose.model('Availability', availabilitySchema);