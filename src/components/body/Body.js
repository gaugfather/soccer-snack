import React, { Component } from 'react';
import Card from '../card/Card';

class Body extends Component {
    render() {
        return (
            <div className="main-wrapper">
		        <div className="main">
                    <div className="signupWrapper">
                        <Card />
				    </div>
                </div>
	       </div>
        )
    }
}

export default Body;