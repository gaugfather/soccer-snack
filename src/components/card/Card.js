import React, { Component } from 'react';
import soccerBall from './soccer-ball.png';
import Snack from '../snack/Snack';

class Card extends Component {

    render() {
        const oldStyleClass = "";  //old-content

        return (
            <div className="card main-background">
                <div className={"text-center " + oldStyleClass}>
                    <h3>
                        <img alt="soccer ball" className="ball-picture" src={soccerBall} />
                        Friday, June 17 2021
                    </h3>
                    <Snack />
				</div>
            </div>
        )
    }
}

export default Card;