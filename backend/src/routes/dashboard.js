const express = require('express')

const { getDashboard } = require('../controllers/dashboard')
const router = express.Router()

router.get('/all', getDashboard)
module.exports = router
