const express = require('express')
const router = express.Router()
const scheduleService = require('./schedule-service')
const logger = require('../../util/logger')


router.route('/:id')
  .get(async (req, res) => {
      if(req.params && req.params.id) {
        const teamId = req.params.id
        const results = await scheduleService.getTeamDataById(teamId)
        if(results.length) {
          logger.info(`Team id: ${teamId} loaded`)
          return res.status(200).send(results)
        } else {
          logger.error(`Team id: ${teamId} not found in DB error`)
          return res.status(404).send({'status': 'An error occurred'})
        }
      } else {
        logger.error(`Team id: ${teamId} not in request error`)
        return res.status(200).send({'status': 'No team found'})
      }
    }
  )

  .post(async (req, res) => {
    if(req.params && req.params.id && req.body) {
      const scheduleId = req.params.id

      logger.info(`Updating scheduleId ${scheduleId} with data ${JSON.stringify(req.body)}`)

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
      logger.error(`Invalid request params, trying to update schedule ${scheduleId}`)
      return res.status(404).send({'status': 'An error occurred'})
    }
  })

module.exports = router