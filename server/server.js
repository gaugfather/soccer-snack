require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000
const Team = require('./api/team/Team')

app.use('/api', (req, res, next) => {
  console.log('api')
  next()
})

app.use('/api/team', Team)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Listening on port ${port}`))