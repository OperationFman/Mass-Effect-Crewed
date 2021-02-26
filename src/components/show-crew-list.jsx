import React, { Component } from 'react';
import CrewItem from './show-crew-item';

class ShowCrewlist extends Component {
    state = {  }
    render() {
        const {crew} = this.props;
        return ( 
            <React.Fragment>
            <CrewItem crewmate={crew[0]}/>
            <CrewItem crewmate={crew[1]}/>
            <CrewItem crewmate={crew[2]}/>
            </React.Fragment> 
        );
    }
}
 
export default ShowCrewlist;