import React, { Component } from 'react';

class Overview extends Component {
    state = {  }
    render() {
        const { gameTitle } = this.props;
        return ( 
            <h1>You've selected: {gameTitle}</h1>
        );
    }
}
 
export default Overview;