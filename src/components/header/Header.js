import React, { Component } from 'react';
import gfhLogo from './gfh-logo-4web.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    render() {
        return (
            <div className="header">
		          <div className="text-center">
			         <img alt="Greenheck Fieldhouse Logo" src={gfhLogo} className="greenheck-logo" />
			         <h1 className="grade-header">Grade: AX</h1>
			         <h2 className="team-header">Team: ASDF</h2>
                     <h5>Coach: 
                        <FontAwesomeIcon icon={faEnvelope} className="icon email-icon" />
                        <a className="coach-email" href="mailto: derek.gauger@gmail.com?subject=Soccer&nbsp;Team:&nbsp;">TEAM ASDF</a>
                     </h5>
		          </div>
	       </div>
        )
    }
}

export default Header;