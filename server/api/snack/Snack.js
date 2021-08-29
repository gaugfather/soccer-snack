const express = require('express')
const router = express.Router()


router.route('/')
  .get((req, res) => {
    console.log('get snack')
    return res.json('successq')
  })


module.exports = router