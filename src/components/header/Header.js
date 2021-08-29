import React from 'react'
import gfhLogo from './gfh-logo-4web.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    width: '100%',
    zIndex: '1',
    backgroundColor: '#04604A',
    color: 'white'
  },
  greenheckLogo: {
  	float: 'left',
  	marginLeft: '42px',
  	width: '6em',
  	marginRight: '-32px'
  },
  grade: {
    marginTop: '6px',
    marginBottom: '4px'
  },
  team: {
    marginTop: '4px'
  },
  emailIcon: {
    paddingLeft: '5px',
    fontSize: 'medium'
  },
  coachEmail: {
      color: 'white',
      textDecoration: 'underline',
      '&:visited': {
        color: 'white',
        textDecoration: 'underline'
      },
      '&:active': {
        color: 'white',
        textDecoration: 'underline'
      },
      '&:hover': {
        color: 'white',
        textDecoration: 'underline'
      }
  }
}))


function Header() {
  const classes = useStyles()

  const grade = '3rd'
  const team = 'Purple'

  return (
    <div className={classes.header}>
      <div className="text-center">
       <img alt="Greenheck Fieldhouse Logo" src={gfhLogo} className={classes.greenheckLogo} />
       <h1 className={classes.grade}>Grade: {grade}</h1>
       <h2 className={classes.team}>Team: {team}</h2>
       <h6>Coach:
          <FontAwesomeIcon icon={faEnvelope} className={classes.emailIcon + " icon"} />
          <a className={classes.coachEmail} href={"mailto: derek.gauger@gmail.com?subject=Soccer team: " + team}>Derek Gauger</a>
       </h6>
      </div>
    </div>
  )
}

export default Header
