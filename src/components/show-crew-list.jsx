import React, { Component } from 'react';
import CrewItem from './show-crew-item';

class ShowCrewlist extends Component {
    state = {  }

    render() {
        const {crew} = this.props;

        return ( 
            <React.Fragment>
            {crew.map((crewmate) => {
                return <CrewItem crewmate={crewmate}/>
            })};

            <button type="button" style={{marginTop:"10%"}}
                className="btn btn-outline-dark"
                onClick={() => this.props.onClickHideCrew()}>Hide Crew
            </button>
            </React.Fragment> 
        );
    }
}
 
export default ShowCrewlist;