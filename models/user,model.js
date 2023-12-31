const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  avatar: {
    type: String, // You can use String to store the URL of the avatar image
    default: 'default-avatar.jpg', // Default avatar image
  },
});

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
