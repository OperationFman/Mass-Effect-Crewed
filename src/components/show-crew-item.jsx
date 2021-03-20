import React, { Component } from 'react';

class CrewItem extends Component {
    state = {  }
    render() {
        const {crewmate} = this.props;
        return ( 
            <button type="Submit" 
                    style={{marginTop:"5%"}}
                    className="btn btn-outline-danger btn-block"
                    onClick={() => this.props.removeCrewmate(crewmate)}>{crewmate}
                    </button>
        );
    }
}
 
export default CrewItem;