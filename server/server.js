require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const Schedule = require('./api/schedule/schedule-route')

app.use(express.json())

app.use('/api/schedule', Schedule)

app.listen(port, () => console.log(`Listening on port ${port}`))