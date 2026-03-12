const express = require('express');
const router = express.Router();

// Mock data for player availabilities and statistics
const playerStatistics = [
    { name: 'Player 1', availability: 'Available', stats: { gamesPlayed: 10, goals: 5, assists: 3 } },
    { name: 'Player 2', availability: 'Unavailable', stats: { gamesPlayed: 8, goals: 2, assists: 1 } },
    { name: 'Player 3', availability: 'Available', stats: { gamesPlayed: 12, goals: 8, assists: 5 } }
];

// Route to view all player availabilities and statistics
router.get('/player-stats', (req, res) => {
    res.json(playerStatistics);
});

module.exports = router;