import React, { Component } from 'react';

class CrewItem extends Component {
    state = {  }
    render() {
        const {crewmate} = this.props;
        return ( 
            <button type="Submit" 
                    style={{marginTop:"5%"}}
                    className="btn btn-outline-danger btn-block">{crewmate}</button>
        );
    }
}
 
export default CrewItem;