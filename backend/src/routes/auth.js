const express = require('express')
const { signup, login } = require('../controllers/auth')
const router = express.Router()
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

router.post('/signup', upload.single('image'), signup)
router.post('/login', login)

module.exports = router
