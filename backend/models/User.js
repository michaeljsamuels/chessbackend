const mongoose = require('mongoose');

// User schema definition
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  wins: { type: Number, default: 0 },
  losses: { type: Number, default: 0 },
  profileUrl: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
