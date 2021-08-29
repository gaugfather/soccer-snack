import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faInfoCircle, faUserSlash, faPencilAlt, faSave } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab'
import Fade from '@material-ui/core/Fade';

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
  saveButton: {
    backgroundColor: '#3D550C',
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



function Snack() {

  const classes = useStyles()

  const players = [
    'Haddie', 'Liam', 'Cole'
  ]

  const [edit, setEdit] = React.useState(false)
  const [snackName, setSnackName] = React.useState('Liam')

  let absensesObj = {}
  players.map((name) => {return absensesObj[name] = false})
  const [absenses, setAbsenses] = React.useState(absensesObj)
  const [gameNotes, setGameNotes] = React.useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac condimentum tellus, id ornare nulla. Aenean in lorem purus. Ut elementum at est eu aliquam. Nam tempus blandit fringilla.')


  function getAbsentCount() {
    let count = 0
    Object.entries(absenses).forEach(
      ([key, value]) => {
        if(value) count++
    })
    return count
  }

  const showEdit = (event) => {
    setEdit(!edit)
  }

  const editAbsenses = (event) => {
    setAbsenses({ ...absenses, [event.target.name]: event.target.checked })
  }

  const editSnackName = (event) => {
    setSnackName(event.target.value)
  }

  const editGameNotes = (event) => {
    setGameNotes(event.target.value)
  }

  const oldStyleClass = ""  //old-content
  const notesClass = " notes show " // " notes hide "

  const snackIcon = (
      <FontAwesomeIcon icon={faUtensils} className="icon text-success" />
  )

  const snackWarningIcon = (
      <span class="text-danger">None!</span>
  )

  return (

      <div style={{paddingBottom: '1em'}}>
        <Fade in={!edit} style={{transitionDelay:'100ms'}}>
          <div className={classes.section + " " + oldStyleClass} style={{display: !edit ? 'block' : 'none'}}>
            <h5>{snackIcon} Snack: {snackName}
            <Fab className={classes.editButton} onClick={showEdit}>
              <FontAwesomeIcon icon={faPencilAlt} />
            </Fab>
            </h5>
            <div className={classes.lineSpace} />
            <h6>
              <FontAwesomeIcon icon={faUserSlash} className="icon text-muted" />
              Absenses:
              <span className={classes.absentCount}>
                {getAbsentCount()}
              </span>
            </h6>
            <div className={classes.lineSpace} />
            <h6><FontAwesomeIcon icon={faInfoCircle} className="icon" />
              Game Notes:
            </h6>
            <p>{gameNotes}</p>
          </div>
        </Fade>
        <Fade in={edit} style={{ transitionDelay:'100ms'}} >
          <div className={`${classes.section} ${classes.editSection} ${oldStyleClass}`} style={{display: edit ? 'block' : 'none'}}>
              <FormControl className={classes.formControl} style={{width: '50%'}} >
                <label className="text-success" style={{marginBottom: '-14px'}}>
                  <FontAwesomeIcon icon={faUtensils} className="icon" />
                    Snack:
                </label>
                <Select value={snackName} onChange={editSnackName} color="primary">
                  {players.map((name) => (
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
                    {getAbsentCount()}
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
                  Game Notes:
                </label>
                <TextField multiline color="primary" value={gameNotes} onChange={editGameNotes}/>
              </FormControl>
              <br />
              <FormControl className={classes.formControl} style={{width: '80%'}} >
                <Button className={classes.saveButton} startIcon={<FontAwesomeIcon icon={faSave} />}
                  onClick={showEdit}>
                    Save
                </Button>
              </FormControl>
            </div>
          </Fade>
        </div>
  )
}
export default Snack