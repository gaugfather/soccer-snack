import React from 'react'
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
    height: '250vh'
  }
}))

function Body() {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
export default Body
