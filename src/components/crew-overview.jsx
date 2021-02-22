import React, { Component } from 'react';
import CrewReload from './crew-reload';
import AddEnter from './confirm-add-enter';

class Overview extends Component {
    state = {  
        crew: ['Ashley', 'Kaiden', 'Liara', 'Wrex', 'Garrus', 'Tali']
    };
    render() {
        const { gameTitle } = this.props;
        return ( 
            <div className="overview-container">
                <CrewReload crew={this.state.crew}/>
                <AddEnter />
            </div>
        );
    }
}
 
export default Overview;