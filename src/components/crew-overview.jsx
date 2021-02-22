import React, { Component } from 'react';
import CrewReload from './2-crew-reload';

class Overview extends Component {
    state = {  }
    render() {
        const { gameTitle } = this.props;
        return ( 
            <div className="">
                <CrewReload />
                <h1>You've selected: {gameTitle}</h1>
            </div>
        );
    }
}
 
export default Overview;