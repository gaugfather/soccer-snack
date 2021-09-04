import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card/Card'
import grass from './grass.jpeg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: '118px',
    background: `url(${grass}) no-repeat`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '300vh'
  }
}))

function Body(props) {
  const classes = useStyles()

  let cards = []
  props.teamData.map(schedule => {
    return cards.push(
      <Card schedule={schedule} />
    )
  })

  return (
    <div className={classes.wrapper}>
      {cards}
    </div>
  )
}

Body.propTypes = {
  teamData: PropTypes.object.isRequired
}

export default Body
