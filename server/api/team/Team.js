const express = require('express')
const router = express.Router()
const mysql = require('../../db/connection')

router.route('/:teamId')
  .get(async (req, res) => {
      if(req.params && req.params.teamId) {
        const teamId = req.params.teamId

        const results = await mysql.query(
            'select s.id scheduleId, t.name, t.color, t.identifier, s.day, s.field, s.game_time, s.practice_time, ' +
            'GROUP_CONCAT(p.first) as absenses, ' + 
            '(SELECT first FROM players WHERE id=s.snack) as snack, ' + 
            '(SELECT GROUP_CONCAT(first) FROM players WHERE team=t.id) as players ' +
            'FROM schedule s LEFT JOIN absenses a ON a.schedule=s.id ' +
            'LEFT JOIN players p ON a.player=p.id ' + 
            'LEFT JOIN team t ON s.team=t.id ' + 
            'WHERE t.id=? GROUP BY s.id', 
            [teamId])
        if(results.length) {
            return res.status(200).send(results)
        } else {
            return res.status(404).send({})
        }
      } else {
        return res.status(200).send({})
      }
})

module.exports = router