import React, { Component } from 'react';

class AddEnterForm extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {

    render() { 
        return ( 
            <div className="">
                <form onSubmit={this.handleSubmit}>
                    <input  type="text"
                            placeholder='Enter Name Here'
                            style={{width:"100%", height: "70px", textAlign:"center", border:"1px solid grey"}}
                    ></input>
                    <button  type="button"
                            className="btn btn-primary btn-block mx-auto Add-enter-buttons"
                            style={{marginTop:"5%", width:"75%"}}
                    >
                    Add
                    </button>
                </form> 
      event.preventDefault();
      const data = new FormData(event.target);
      this.props.addCrew(data.get('newName'));
      this.props.onAddCrewmate() //This actually closes it, Refactor to say so
    }

                <button
                    className="btn btn-secondary btn-block mx-auto Add-enter-buttons"
                    style={{width:"75%", marginTop:"5%"}}
                    onClick={() => this.props.onAddCrewmate()}
                >
                Cancel
                </button>
            </div>
        );
    }
  }

export default AddEnterForm