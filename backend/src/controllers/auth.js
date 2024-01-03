const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/users.model')

exports.signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email })

    if (existingUser) {
      return res.status(400).json({
        message: 'User already exists!',
        success: false,
      })
    }

    if (!req.body.password) {
      return res.status(400).json({
        message: 'Password is required',
        success: false,
      })
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const createUser = await User.create({
      email: req.body.email,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
    })

    res.status(200).json({
      data: {
        email: createUser.email,
        firstName: createUser.firstName,
        lastName: createUser.lastName,
        city: createUser.city,
        password: createUser.password,
      },
      success: true,
      message: 'User created successfully',
    })
  } catch (error) {
    console.error('Error in signup:', error)
    next(error)
  }
}

exports.login = async (req, res, next) => {
  try {
    const loginUser = await User.findOne({ email: req.body.email })

    if (!loginUser) {
      return res.status(404).json({
        message: 'User not found',
        success: false,
      })
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      loginUser.password,
    )

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: 'Incorrect password',
        success: false,
      })
    }

    const token = jwt.sign(
      { userId: loginUser._id, email: loginUser.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    )

    res.status(200).json({
      token: token,
      userId: loginUser._id,
      success: true,
      message: 'Login successful',
    })
  } catch (error) {
    console.error('Error in login:', error)
    next(error)
  }
}
