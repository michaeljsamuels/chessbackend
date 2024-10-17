const express = require('express');
const mongoose = require('mongoose');
const app = express();

const User = require('./models/User')

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chessTracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple route
app.get('/', (req, res) => {
  res.send('Chess Tracker API is running');
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Create a new user
app.post('/users', async (req, res) => {
    try {
      const { username } = req.body;
  
      // Generate a unique profile URL for the user
      const profileUrl = `https://yourapp.com/profile/${username}`;
  
      // Create a new user in the database
      const newUser = new User({ username, profileUrl });
      await newUser.save();
  
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ error: 'User creation failed' });
    }
  });
  
  // Get user profile by username
  app.get('/users/:username', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  

  // Update user's win/loss record
app.put('/users/:username/win', async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { username: req.params.username },
        { $inc: { wins: 1 } },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  app.put('/users/:username/loss', async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { username: req.params.username },
        { $inc: { losses: 1 } },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });