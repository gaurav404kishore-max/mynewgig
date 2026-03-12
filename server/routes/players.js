const express = require('express');
const router = express.Router();

// Dummy data for players
let players = [];

// Route to get all players
router.get('/', (req, res) => {
    res.json(players);
});

// Route to create a new player
router.post('/', (req, res) => {
    const newPlayer = req.body;
    players.push(newPlayer);
    res.status(201).json(newPlayer);
});

module.exports = router;