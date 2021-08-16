import React, { Component } from 'react';
import Slider from 'react-slick';
import goal from './goal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

class Snack extends Component {

    constructor(props) {
        super(props);
        
        let players = [
            {name: 'Haddie'}, {name: 'Liam'}, {name: 'Cole'}
        ]
        let absent = []
        this.state = {
            players, 
            snack: '',
            absent,
            notes: {
                value: ''
            }
        };

        this.personChange = this.personChange.bind(this);
        this.notesChange = this.notesChange.bind(this);
    }

    personChange(event) {
        this.setState({person: { value: event.target.value}});
    }

    notesChange(event) {
        this.setState({notes: {value:event.target.value}});
    }

    render() {
        const playersSelect = []
        for(let i=0; i<=this.state.players.length - 1; i++) {
            console.log(this.state.players[i])
            if(i === 0) {
                playersSelect.push(
                    <option key={0} value="None">None</option>
                )
            }
            playersSelect.push(
                <option key={i+1} value={this.state.players[i].name}>{this.state.players[i].name}</option>
            )
        }
        console.log(playersSelect);

        const absentSelect = []
        for(let i=0; i<=this.state.players.length - 1; i++) {
            console.log(this.state.players[i])
            if(i === 0) {
                absentSelect.push(
                    <option key={0} value="None">None</option>
                )
            }
            absentSelect.push(
                <option key={i+1} value={this.state.players[i].name}>{this.state.players[i].name}</option>
            )
        }
        

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const oldStyleClass = "";  //old-content
        const notesClass = " notes show "; // " notes hide " 
        
        const snackIcon = (
            <FontAwesomeIcon icon={faUtensils} className="icon text-success" />
        ); 
        
        const snackWarningIcon = (
            <span class="text-danger">None!</span>
        ); 


        // DB FIELDS
        const description = "Practice 5:30, Game 6:00";
        const field = "5";
        const person = 'Gauger'
        const gameNotes = ''
        const date = 'July 12, 2021'
        const teamId = 1
        const notes = ''

        return (
            <Slider {...settings}>  
                <div className={"slick-content " + oldStyleClass}>
                    <h4>{description}</h4>
                    <div>
                        <h5>Field: {field}</h5>
                        <h5>{snackIcon} Snack: {person}</h5>
                        <div className={notesClass}>
                            <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                            Game Notes: <p>{gameNotes}</p>
                        </div>
                    </div>
                    <img alt="goal" className="goal-picture" src={goal} />
                </div>
                <div className={"slick-content " + oldStyleClass}>
                    <h4 style={{color: 'darkred', textDecoration: 'underline'}}>Updates</h4>           
                    <div className="form-group">
                        <FormControl fullWidth='true'>
                        <label>
                                    <FontAwesomeIcon icon={faUtensils} className="icon text-success" />
                                    Player bringing snack:
                                </label>
                                <Select>
                                    {playersSelect}
                                </Select>
                                <label>
                                    Absenses
                                </label>
                                <Select>
                                    {playersSelect}
                                </Select>

                        </FormControl>
                        
                        {/* <input type="text" className="form-control" placeholder="Person" value={this.state.person.value} onChange={this.personChange}/> */}
                        {/* <input type="hidden" name="date">{date}</input> */}
                        {/* <input type="hidden" name="team_id">{teamId}</input> */}
                        {/* <input type="hidden" name="description">{description} value={description}></input> */}
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faInfoCircle} className="icon" />
                        <label>Other Game Notes</label>
                        <textarea className="form-control" value={this.state.notes.value} onChange={this.notesChange}>{notes}</textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </Slider>
        );
    }
}

export default Snack;