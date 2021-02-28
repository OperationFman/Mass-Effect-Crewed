import React, { Component } from 'react';

class CrewReload extends Component {
    render() { 
        return (
            <div className='crew-reload-container'>
                <div className='left-crew-options'>
                    <h2>{this.props.shownCrewmate1}</h2>
                    <div className='crew-divide-line'></div>
                    <h2>{this.props.shownCrewmate2}</h2>
                </div>
                <div className="right-refresh">
                <button type="button" 
                    onClick={this.props.handleRefresh}
                    className="btn btn-outline-info"
                    style={{textAlign:"center", height:"90%", width:"100%", 
                            fontSize:"calc(30px + 2vmin)"}}
                    >🗘
                </button>
                </div>
            </div> 
        );
    }
}
 
export default CrewReload;