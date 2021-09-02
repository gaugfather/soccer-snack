import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faInfoCircle, faUserSlash, faPencilAlt, faSave, faExclamationCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Fade from '@material-ui/core/Fade'
import { saveScheduleData } from '../../services/api'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    paddingBottom: '1em'
  },
  section: {
    paddingTop: '.5em',
    marginLeft: '.5em',
    marginRight: '.5em',
    marginBottom: '.5em'
  },
  editButton: {
    backgroundColor: '#3D550C',
    color: 'white',
    float: 'right',
    right: '30px'
  },
  editSection: {
    border: '2px solid #3D550C'
  },
  actionButtons: {
    width: '80%', 
    flexDirection: 'row',
    justifyContent: 'center'
  },
  saveButton: {
    paddingLeft: '12px',
    paddingRight: '12px',
    backgroundColor: '#3D550C',
    color: 'white'
  },
  cancelButton: {
    marginLeft: '1em',
    paddingLeft: '12px',
    paddingRight: '12px',
    backgroundColor: theme.palette.grey['700'],
    color: 'white'
  },
  lineSpace: {
    paddingTop: '.8em'
  },
  absentCount: {
    fontWeight: 'bold',
    fontSize: 'x-large',
    paddingLeft: '6px',
    color: 'black'
  },
  updateHeader: {
    color: 'white',
    marginBottom: '-.1em',
    marginLeft: '15%',
    marginRight: '15%',
    background: '#3D550C'
  }
}))

function formatAbsenses(playerList, absensesProp) {
  let absensesObj = {}
  const absensesList = absensesProp ? absensesProp.split(',') : []
  playerList.map((name) => {
    return absensesList.includes(name) ? 
        absensesObj[name] = true : absensesObj[name] = false
  })
  absensesList.map((name) => { return absensesObj[name] = true})

  return absensesObj
}

function getAbsentCount(absenses) {
  if(!absenses) {
    return 0
  }

  let count = 0
  Object.entries(absenses).forEach(
    ([key, value]) => {
      if(value) count++
  })
  return count
}

function Snack(props) {

  const classes = useStyles()
 
  const [edit, setEdit] = React.useState(false)
  
  const players = props.players ? props.players.split(',') : []
  
  const emptySnackName = '(None)'
  const snackOptions = [emptySnackName, ...players ]
  const [snackName, setSnackName] = React.useState(props.name)
  const [originalSnackName, setOriginalSnackName] = React.useState(props.name)

  const [gameNotes, setGameNotes] = React.useState(props.notes)
  const [originalGameNotes, setOriginalGameNotes] = React.useState(props.notes)

  const absensesObj = formatAbsenses(players, props.absenses)
  const [absenses, setAbsenses] = React.useState(absensesObj)
  const [originalAbsenses, setOriginalAbsenses] = React.useState(absensesObj)

  
  const save = async() => {
    const savedSnackName = snackName === emptySnackName ? null : snackName
    const editableData = {
      snack: savedSnackName,
      absenses,
      notes: gameNotes
    }
    await saveScheduleData(props.id, editableData)
    setOriginalSnackName(savedSnackName)
    if(!savedSnackName) {
      setSnackName(savedSnackName)
    }
    setOriginalAbsenses(absenses)
    setOriginalGameNotes(gameNotes)

    showEdit()
  }

  const showEdit = (event) => {
    setEdit(!edit)
  }

  const editAbsenses = (event) => {
    setAbsenses({ ...absenses, [event.target.name]: event.target.checked })
  }

  const cancelEdit = () => {
    setAbsenses(originalAbsenses)
    setSnackName(originalSnackName)
    setGameNotes(originalGameNotes)

    showEdit()
  }

  const editSnackName = (event) => {
    setSnackName(event.target.value)
  }

  const editGameNotes = (event) => {
    setGameNotes(event.target.value)
  }

  const snackLabel = snackName ? (
    <span>
      <FontAwesomeIcon icon={faUtensils} className="icon text-success" />Snack: {snackName}
    </span>
    ): (
      <span>
        <FontAwesomeIcon icon={faExclamationCircle} className="icon text-danger" />Snack: <span className="text-danger">None!</span>
      </span>
    )

  return (

      <div style={{paddingBottom: '1em'}}>
        <Fade in={!edit} style={{transitionDelay:'100ms'}}>
          <div className={classes.section} style={{display: !edit ? 'block' : 'none'}}>
            <h5>{snackLabel}
            <Fab className={classes.editButton} onClick={showEdit} 
              disabled={props.oldDate} style={{display: !props.oldDate ? 'block': 'none'}}>
              <FontAwesomeIcon icon={faPencilAlt} />
            </Fab>
            </h5>
            <div className={classes.lineSpace} />
            <h6>
              <FontAwesomeIcon icon={faUserSlash} className="icon text-muted" />
              Absenses:
              <span className={classes.absentCount}>
                {getAbsentCount(absenses)}
              </span>
            </h6>
            <div className={classes.lineSpace} />
            <span style={{display: gameNotes ? 'block' : 'none'}}>
               <h6><FontAwesomeIcon icon={faInfoCircle} className="icon" />
                 Notes:
               </h6>
               <p>{gameNotes}</p>
            </span>
          </div>
        </Fade>
        <Fade in={edit} style={{ transitionDelay:'100ms'}} >
          <div className={`${classes.section} ${classes.editSection}`} style={{display: edit ? 'block' : 'none'}}>
              <FormControl className={classes.formControl} style={{width: '50%'}} >
                <label className="text-success" style={{marginBottom: '-14px'}}>
                  <FontAwesomeIcon icon={faUtensils} className="icon" />
                    Snack:
                </label>
                <Select value={snackName ? snackName: emptySnackName} onChange={editSnackName} color="primary">
                  {snackOptions.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <FormControl className={classes.formControl} style={{width: '100%'}}>
                <label className="text-muted">
                  <FontAwesomeIcon icon={faUserSlash} className="icon" />
                  Absenses:
                  <span className={classes.absentCount}>
                    {getAbsentCount(absenses)}
                  </span>
                </label>
                <Grid container alignItems="center" direction="row" justifyContent="center">
                  {players.map((name) => (
                    <FormControlLabel control={
                      <Checkbox color="primary" checked={absenses[name]} onChange={editAbsenses} name={name} />
                    } label={name} />
                  ))}
                </Grid>
              </FormControl>
              <br />
              <FormControl className={classes.formControl} style={{width: '90%'}} >
                <label>
                  <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                  Notes:
                </label>
                <TextField multiline color="primary" value={gameNotes} onChange={editGameNotes}/>
              </FormControl>
              <br />
              <FormControl className={`${classes.formControl} ${classes.actionButtons}`} >
                <Button className={classes.saveButton} startIcon={<FontAwesomeIcon icon={faSave} />}
                  onClick={save}>
                    Save
                </Button>
                <Button className={classes.cancelButton} startIcon={<FontAwesomeIcon icon={faTimesCircle} />}
                  onClick={cancelEdit}>
                    Cancel
                </Button>
              </FormControl>
            </div>
          </Fade>
        </div>
  )
}

Snack.propTypes = {
  name: PropTypes.string,
  absenses: PropTypes.array,
  players: PropTypes.array,
  notes: PropTypes.string,
  oldDate: PropTypes.bool,
  id: PropTypes.number
}

export default Snack