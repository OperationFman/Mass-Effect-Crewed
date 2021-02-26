import React, { Component } from 'react';
import CrewItem from './show-crew-item';

class ShowCrewlist extends Component {
    state = {  }

    render() {
        const {crew} = this.props;

        return ( 
            <React.Fragment>
            <div className=""
                 style={{color:"grey", fontSize:"75%"}}>
                <p>Tap Name to Delete</p>
            </div>

            {crew.map((crewmate) => (
                <CrewItem key={crewmate} crewmate={crewmate}/>
            ))}

            <button type="button" style={{marginTop:"10%"}}
                className="btn btn-outline-dark"
                onClick={() => this.props.onClickHideCrew()}>Hide Crew
            </button>
            </React.Fragment> 
        );
    }
}
 
export default ShowCrewlist;