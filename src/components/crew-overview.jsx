import React, { Component } from 'react';
import CrewReload from './crew-reload';
import AddEnter from './add-enter';

class Overview extends Component {
    state = {  
        crew: ['Ashley', 'Kaiden', 'Liara', 'Wrex', 'Garrus', 'Tali']
    };
    render() {
        const { gameTitle } = this.props;
        return ( 
            <div className="overview-container">
                <CrewReload crew={this.state.crew}/>
                <AddEnter crew={this.state.crew}/>
            </div>
        );
    }
}
 
export default Overview;