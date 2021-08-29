import React from 'react'
import soccerBall from './soccer-ball.png'
import goal from './goal.png'
import Snack from '../snack/Snack'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: '2em',
    background: 'rgba(176,255,233,0.9)',
  	paddingTop: '1em',
    marginRight: '.5em',
    marginLeft: '.5em'
  },
  ballPicture: {
    width: '20px',
  	marginRight: '10px'
  },
  goalPicture: {
    width: '8em',
  	paddingLeft: '1em'
  }
}))

function Card() {
  const classes = useStyles()

  const oldStyleClass = ""  //old-content

  // DB FIELDS
  const description = "Practice 5:30, Game 6:00"
  const field = "5"
  const date = 'July 12, 2021'
  const teamId = 1

  return (
    <div className={classes.card}>
      <div className={"text-center " + oldStyleClass}>
        <h3>
          <img alt="soccer ball" className={classes.ballPicture} src={soccerBall} />
          {date}
        </h3>
        <h4>{description}</h4>
        <Grid container alignItems="center" direction="row" justifyContent="center">
          <Grid item xs={6}>
            <h5 style={{float: 'right', paddingTop: '13px'}}>Field: {field}</h5>
          </Grid>
          <Grid item xs={3}>
            <img alt="goal" className={classes.goalPicture} src={goal} />
          </Grid>
          <Grid item xs={3} />
        </Grid>
        <div style={{paddingTop: '.8em'}} />
        <Snack />
      </div>
    </div>
  )
}
export default Card
