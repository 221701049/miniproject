const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/vegetableDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Define Vegetable Schema
const vegetableSchema = new mongoose.Schema({
    name: String, // Vegetable name in Tamil
    district: String, // District in Tamil
    market: String, // Market name in Tamil
    highPrice: Number, // High selling price
    lowPrice: Number, // Low selling price
});

const Vegetable = mongoose.model('Vegetable', vegetableSchema);

// API to search vegetables by name
app.get('/api/search', async (req, res) => {
    const query = req.query.name; // Vegetable name in Tamil
    try {
        const results = await Vegetable.find({ name: query });
        res.json(results);
        console.log("data base is connected");
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});