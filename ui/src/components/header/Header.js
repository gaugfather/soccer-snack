import React from 'react'
import PropTypes from 'prop-types'
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
    marginBottom: '8px'
  },
  emailIcon: {
    paddingLeft: '5px',
    fontSize: 'medium'
  },
  noTeam: {
    display: 'inline-block',
    marginTop: '2em',
    marginLeft: '1em'
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


function Header(props) {
  const classes = useStyles()
  
  return (
    <div className={classes.header}>
      <div className="text-center">
       <img alt="Greenheck Fieldhouse Logo" src={gfhLogo} className={classes.greenheckLogo} />
       {props.teamData.length ? (
         <div>
          <h1 className={classes.grade}>Grade: {props.teamData[0].name}</h1>
          <h2 className={classes.team}>Team: {props.teamData[0].color} - {props.teamData[0].identifier}</h2>
         </div>) : null }
       <h6 className={!props.teamData.length ? classes.noTeam : ''}>Coach:
          <FontAwesomeIcon icon={faEnvelope} className={classes.emailIcon + " icon"} />
          <a className={classes.coachEmail} href={"mailto: derek.gauger@gmail.com?subject=Soccer team: " + props.team}>Derek Gauger</a>
       </h6>
      </div>
    </div>
  )
}

Header.propTypes = {
  teamData: PropTypes.shape({
    grade: PropTypes.string,
    team: PropTypes.string
  })
  
}

export default Header
