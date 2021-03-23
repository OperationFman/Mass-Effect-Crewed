import React, { Component } from 'react';

class AddEnterForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      this.props.addCrew(data.get('newName'));
      this.props.onAddCrewmate() //This actually closes it, Refactor to say so
    }
  
    render() {
      return (
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <input  type="text" 
                    name="newName"
                    placeholder='Enter Name Here'
                    autoComplete="off"
                    style={{width:"100%", height: "70px", textAlign:"center", border:"1px solid grey"}}/>
    
            <button className="btn btn-primary btn-block mx-auto Add-enter-buttons"
                    style={{marginTop:"5%", width:"75%"}}>Add</button>
          </form>

          <button className="btn btn-secondary btn-block mx-auto Add-enter-buttons"
                  style={{width:"75%", marginTop:"5%"}}
                  onClick={() => this.props.onAddCrewmate()}
          >
          Cancel
          </button>
        </React.Fragment>
      );
    }
  }

export default AddEnterForm