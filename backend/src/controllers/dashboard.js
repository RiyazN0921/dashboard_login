const User = require('../models/users.model')

exports.getDashboard = async (req, res, next) => {
  try {
    const user = await User.find()

    if (!user) {
      return res.status(404).json({ message: 'User not found', success: false })
    }

    res.json({ user: user })
  } catch (error) {
    next(error)
  }
}
