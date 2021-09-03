const mysql = require('../../db/connection')
const logger = require('../../util/logger')

async function getTeamDataById(teamId) {
    return await mysql.query(
        'select s.id schedule_id, t.name, t.color, t.identifier, ' + 
        's.day, s.field, s.game_time, s.practice_time, s.notes, ' +
        'GROUP_CONCAT(p.first) as absenses, ' + 
        '(SELECT first FROM players WHERE id=s.snack) as snack, ' + 
        '(SELECT GROUP_CONCAT(first) FROM players WHERE team=t.id) as players ' +
        'FROM schedule s LEFT JOIN absenses a ON a.schedule=s.id ' +
        'LEFT JOIN players p ON a.player=p.id ' + 
        'LEFT JOIN team t ON s.team=t.id ' + 
        'WHERE t.id=? GROUP BY s.id', 
        [teamId]
    )
}

async function getPlayerIdByName(first) {
    if(first) {
        const result = await mysql.query(
            'SELECT id FROM players WHERE first=?',
            [first]
        )
        if(!result.length) {
            const error = `Player ${first} not found!`
            logger.error(error)
            throw Error(error)
        }
        return result[0].id
    } else {
        return null
    }
}

async function updateSchedule(notes, snackPlayerId, scheduleId) {
    const result = await mysql.query(
        'UPDATE schedule set notes=?, snack=? WHERE id=?',
        [notes, snackPlayerId, scheduleId]
    )
    if(!result) {
        const error = `Unable to update schedule ${scheduleId}`
        throw Error(error)
    }
    return 'success'
}

async function updatePlayerAttendance(playerId, isAbsent, scheduleId) {
    const existing = await mysql.query(
        'SELECT id FROM absenses WHERE schedule=? AND player=?',
        [scheduleId, playerId]
    )
    if(!existing.length) {
        if(isAbsent) {
            await mysql.query(
                'INSERT INTO absenses (schedule, player) ' +
                'VALUES (?, ?)',
                [scheduleId, playerId]
            )
        }
    } else {
        if(!isAbsent) {
            await mysql.query(
                'DELETE FROM absenses WHERE id=?',
                [existing[0].id]
            )
        }
    }
    return 'success'
}

module.exports = {
    getTeamDataById,
    getPlayerIdByName,
    updateSchedule,
    updatePlayerAttendance
}