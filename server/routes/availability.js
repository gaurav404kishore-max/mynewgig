const express = require('express');
const router = express.Router();

// Mock data to simulate database
let availabilities = [];

// Route to submit availability
router.post('/submit', (req, res) => {
    const { playerId, availableTimes } = req.body; // Expecting playerId and availableTimes in the body
    const newAvailability = { playerId, availableTimes, id: Date.now() }; // Unique ID based on current time
    availabilities.push(newAvailability);
    res.status(201).json({ message: 'Availability submitted successfully!', availability: newAvailability });
});

// Route to get availability by player
router.get('/player/:playerId', (req, res) => {
    const { playerId } = req.params;
    const playerAvailability = availabilities.filter(availability => availability.playerId === playerId);
    res.status(200).json(playerAvailability);
});

// Route to get all availabilities for admin dashboard
router.get('/admin', (req, res) => {
    res.status(200).json(availabilities);
});

module.exports = router;