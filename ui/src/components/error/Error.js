import { makeStyles } from '@material-ui/core/styles'
import soccergif from './soccer.gif'
import grass from '../body/grass.jpeg'
import Grid from '@material-ui/core/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles((theme) => ({
    error: {
        paddingTop: '118px',
        background: `url(${grass}) no-repeat`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: '100vh'
    },
    message: {
        color: 'white',
        textAlign: 'center',
        marginLeft: '1em',
        marginRight: '1em',
        background: 'rgb(94 197 169 / 90%)',
        padding: '1em'
    }
}))

function Error() {
    
    const classes = useStyles()

    return (
        <Grid container alignItems="center" direction="row" justifyContent="center" className={classes.error}>
            <div className={classes.message}>
                <h1>
                    <FontAwesomeIcon icon={faExclamationCircle} className="icon" />Oops!
                </h1>
                <h2>Your team does not exist. <br />Please try a different link.</h2>
            </div> 
           
            <img src={soccergif} className="img-fluid" alt="soccer gif" />
        </Grid>
    )
    
}
export default Error