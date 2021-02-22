import React, { Component } from 'react';

class ShowCrewButton extends Component {
    render() { 
        return (  
            <button type="button" 
                className="btn btn-outline-dark"
                onClick={() => this.props.onClickShowCrew()}>Show Crew
            </button>
        );
    }
}
 
export default ShowCrewButton;