import React from 'react'
import PropTypes from 'prop-types'
import soccerBall from './soccer-ball.png'
import goal from './goal.png'
import Snack from '../snack/Snack'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: '2em',
    background: 'rgba(176,255,233,0.9)',
  	paddingTop: '1em',
    marginRight: '.5em',
    marginLeft: '.5em',
    textAlign: 'center'
  },
  ballPicture: {
    width: '20px',
  	marginRight: '10px'
  },
  goalPicture: {
    width: '8em',
  	paddingLeft: '1em'
  },
  timeLabel: {
    fontSize: 'smaller',
    marginRight: '4px'
  },
  field: {
    float: 'right', 
    paddingTop: '13px'
  },
  oldDate: {
    textDecoration: 'line-through',
    background: 'rgb(110 165 149 / 90%)'
  }
}))

function Card(props) {
  const classes = useStyles()

  const { day, 
    game_time: gameTime, 
    practice_time: practiceTime, 
    field, snack, notes,
    absenses, players, schedule_id: id } = props.schedule
  const mysqlTimeFormat = 'hh:mm:ss'
  const uiTimeFormat = 'h:mma'

  const oldDate = moment().isAfter(moment(day).add(20, 'hours'))

  return (
    <div className={`${classes.card} ${oldDate ? classes.oldDate: ''}`}>
      <div className={''}>
        <h3>
          <img alt="soccer ball" className={classes.ballPicture} src={soccerBall} />
          {moment(day).format('MMM DD, YYYY')}
        </h3>
        <h4 style={{display: practiceTime ? 'block' : 'none'}}>
          <span className={classes.timeLabel}>Practice:</span>
           { moment(practiceTime, mysqlTimeFormat).format(uiTimeFormat) }
           </h4>
        <h4>
          <span className={classes.timeLabel}>Game:</span>
           { moment(gameTime, mysqlTimeFormat).format(uiTimeFormat) }
        </h4>
        <Grid container alignItems="center" direction="row" justifyContent="center">
          <Grid item xs={6}>
            <h5 className={classes.field} style={{ textDecoration: !oldDate ? 'none' : 'line-through'}}>Field: {field}</h5>
          </Grid>
          <Grid item xs={3}>
            <img alt="goal" className={classes.goalPicture} src={goal} />
          </Grid>
          <Grid item xs={3} />
        </Grid>
        <div style={{paddingTop: '.8em'}} />
        <Snack name={snack} absenses={absenses} players={players} 
           notes={notes} oldDate={oldDate} id={id} />
      </div>
    </div>
  )
}

Card.propTypes = {
  schedule: PropTypes.shape({
    day: PropTypes.string,
    field: PropTypes.string,
    game_time: PropTypes.string,
    practice_time: PropTypes.string
  })
}
export default Card
