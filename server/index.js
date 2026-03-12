const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = 'your_mongodb_connection_string'; // replace with your MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Basic Route for cricket availability checker
app.get('/api/cricket-availability', (req, res) => {
    // Here, implement your logic to check cricket availability
    res.json({ available: true }); // mock response, replace with actual logic
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});