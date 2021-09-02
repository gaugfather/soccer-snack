const express = require('express')
const router = express.Router()
const mysql = require('../../db/connection')
const scheduleService = require('./schedule-service')


router.route('/:id')
  .get(async (req, res) => {
      if(req.params && req.params.id) {
        const teamId = req.params.id
        const results = await scheduleService.getTeamDataById(teamId)
        if(results.length) {
            return res.status(200).send(results)
        } else {
            return res.status(404).send({'status': 'An error occurred'})
        }
      } else {
        return res.status(200).send({'status': 'No team found'})
      }
    }
  )

  .post(async (req, res) => {
    console.log('updating schdule')
    if(req.params && req.params.id && req.body) {
      const scheduleId = req.params.id

      const snackPlayerId = req.body.snack ? await scheduleService.getPlayerIdByName(req.body.snack) : null
      const notes = req.body.notes
      await scheduleService.updateSchedule(notes, snackPlayerId, scheduleId)
      
      const absenses = req.body.absenses ? req.body.absenses : {}
      for (const name in absenses) {
        const playerId = await scheduleService.getPlayerIdByName(name)
        await scheduleService.updatePlayerAttendance(playerId, absenses[name], scheduleId)
      }
      return res.status(200).send({'status': 'success'})
    } else {
      return res.status(404).send({'status': 'An error occurred'})
    }
  })

module.exports = router