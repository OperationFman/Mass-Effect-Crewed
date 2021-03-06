import React, { Component } from 'react';

class AddEnterButtons extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
            <button
                className="btn btn-primary btn-block mx-auto Add-enter-buttons"
                onClick={this.props.handleConfirm}
            >
            Confirm
            </button>
            <button
                className="btn btn-outline-dark btn-block mx-auto Add-enter-buttons"
                onClick={() => this.props.onClickAddEnterForm()}
            >
            +
            </button>
            </React.Fragment>
        );
    }
}
 
export default AddEnterButtons;