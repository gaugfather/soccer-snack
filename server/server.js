require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const logger = require('./util/logger')

const Schedule = require('./api/schedule/schedule-route')

const path = require("path");

app.use(express.json())

app.use('/api/schedule', Schedule)

app.get("/(\\d+)", (req, res) => {
 res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(express.static("build"));

app.listen(port, () => logger.info(`Listening on port ${port}`))