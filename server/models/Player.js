const mongoose = require('mongoose');

// Create Player Schema
const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    }
});

// Create Player model
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;