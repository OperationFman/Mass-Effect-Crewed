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
            <button type="button" style={{marginTop:"10%"}}
                className="btn btn-outline-dark"
                onClick={() => this.props.onClickHideCrew()}>Hide Crew
            </button>
            </React.Fragment> 
        );
    }
}
 
export default ShowCrewlist;