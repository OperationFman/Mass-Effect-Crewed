import React, { Component } from 'react';

class AddEnterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {formValue: ''};
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({formValue: event.target.value});
      }

    onAddClick(event) {
        event.preventDefault();
        this.props.onCancelAdd();
        this.props.addCrew(this.state.formValue);
    }
  
    render() { 
        return ( 
            <React.Fragment>
            <input type="text"
                   style={{width:"100%", height: "70px", textAlign:"center", border:"1px solid grey"}}
                   placeholder="Enter Name Here"></input>
            <button
                className="btn btn-primary btn-block mx-auto Add-enter-buttons"
                style={{marginTop:"5%", width:"75%"}}
                onClick={() => this.onClick()}
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
        );
    }
}
 
export default AddEnterForm;