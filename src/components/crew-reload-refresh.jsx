import React, { Component } from 'react';

class RefreshButton extends Component {
    state = {  }
    render() { 
        return ( 
            <button type="button" 
                onClick={() => this.props.onClickRefresh()}
                className="btn btn-outline-info"
                style={{textAlign:"center", height:"90%", width:"100%", 
                        fontSize:"calc(30px + 2vmin)"}}
                >🗘
            </button>
         );
    }
}
 
export default RefreshButton;