import React, { Component } from 'react';

class AddEnterForm extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <input type="text"
                   style={{width:"100%", height: "70px", textAlign:"center", border:"1px solid grey"}}
                   placeholder="Enter Name Here"></input>
            <button
                className="btn btn-primary btn-block mx-auto Add-enter-buttons"
                style={{marginTop:"5%", width:"75%"}}
                onClick={() => this.props.onCancelAdd()}
            >
            Add
            </button>
            <button
                className="btn btn-secondary btn-block mx-auto Add-enter-buttons"
                style={{width:"75%"}}
                onClick={() => this.props.onAddCrewmate()}
            >
            Cancel
            </button>
            </React.Fragment> 
        );
    }
}
 
export default AddEnterForm;