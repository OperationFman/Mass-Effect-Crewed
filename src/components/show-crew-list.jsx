import React, { Component } from 'react';
import CrewItem from './show-crew-item';

class ShowCrewlist extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <CrewItem />
            <CrewItem />
            <CrewItem />
            </React.Fragment> 
        );
    }
}
 
export default ShowCrewlist;