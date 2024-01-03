const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    validate: {
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Invalid email format',
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (password) => {
        return password.length >= 6
      },
      message: 'Password must be at least 6 characters',
    },
  },
  firstName: {
    type: String,
    lowercase: true,
    trim: true,
  },
  lastName: {
    type: String,
    lowercase: true,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
})

const User = mongoose.model('User', userSchema)
module.exports = User
