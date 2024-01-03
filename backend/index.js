const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const { dbConnection } = require('./src/config/db.config')

const app = express()

require('dotenv').config()
const port = process.env.PORT

app.use(bodyparser.json())
const allowedOrigins = [process.env.FRONTEND_URL1]
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
)
app.options('*', cors())

app.use('/api/auth', require('./src/routes/auth'))
app.use('/api/dashboard', require('./src/routes/dashboard'))

app.listen(port, async () => {
  console.log('server listening on port ' + port)
  await dbConnection()
})
