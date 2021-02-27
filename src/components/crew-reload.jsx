import React, { Component } from 'react';
import RefreshButton from './crew-reload-refresh';

class CrewReload extends Component {
    state = {
        shownCrewmate1: '',
        shownCrewmate2: '',
    }
    
    getUnusedCrew = () => {
        const localizeCrewList = this.props.crew;
        const selectLeastFour = localizeCrewList.slice(-4);
        const randomizer = Math.floor(Math.random() * (selectLeastFour.length - 1) + 1);
        const result = [selectLeastFour[randomizer], selectLeastFour[randomizer -1]];
        return result;
    };

    updateCrewState = () => {
        var renderCrewNames = this.getUnusedCrew();
        if (renderCrewNames[0] == this.state.shownCrewmate1) {
            this.updateCrewState();
        }
        console.log(this.state.shownCrewmate1 = renderCrewNames[0]);
        console.log(this.state.shownCrewmate2 = renderCrewNames[1]);
    };

    handleRefresh = () => {
        this.forceUpdate();
    };

    render() { 
        this.updateCrewState();
        return (
            <div className='crew-reload-container'>
                <div className='left-crew-options'>
                    <h2>{this.state.shownCrewmate1}</h2>
                    <div className='crew-divide-line'></div>
                    <h2>{this.state.shownCrewmate2}</h2>
                </div>
                <div className="right-refresh">
                <button type="button" 
                    onClick={this.handleRefresh}
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