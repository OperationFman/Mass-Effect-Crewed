import React, { Component } from 'react';
import CrewReload from './2-crew-reload';

class Overview extends Component {
    state = {  
        crew: ['Ashley', 'Kaiden', 'Liara', 'Wrex', 'Garrus', 'Tali']
    };
    render() {
        const { gameTitle } = this.props;
        return ( 
            <div className="">
                <CrewReload crew={this.state.crew}/>
                <h1>You've selected: {gameTitle}</h1>
            </div>
        );
    }
}
 
export default Overview;