import React, { Component } from 'react';

class CrewItem extends Component {
    state = {  }
    render() {
        const {crewmate} = this.props;
        return ( 
            <h3>{crewmate}</h3>
        );
    }
}
 
export default CrewItem;