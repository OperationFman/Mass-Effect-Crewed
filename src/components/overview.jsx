import React, { Component } from 'react';
import CrewReload from './crew-reload';
import AddEnter from './add-enter';
import ShowCrew from './show-crew';

class Overview extends Component {
    state = {  
        crew: ['Ashley', 'Kaiden', 'Liara', 'Wrex', 'Garrus', 'Tali'],
        shownCrewmate1: '',
        shownCrewmate2: ''
    };

    render() {
        const { gameTitle } = this.props;
        this.updateCrewState();
        return ( 
            <div className="overview-container">
                <CrewReload crew={this.state.crew}
                            shownCrewmate1={this.state.shownCrewmate1}
                            shownCrewmate2={this.state.shownCrewmate2}
                            updateCrewState={this.updateCrewState}
                            handleRefresh={this.handleRefresh}
                            />
                <AddEnter crew={this.state.crew}/>
                <ShowCrew crew={this.state.crew}/>
            </div>
        );
    }

    getUnusedCrew = () => {
        const localizeCrewList = this.state.crew;
        const selectLeastFour = localizeCrewList.slice(-4);
        const randomizer = Math.floor(Math.random() * (selectLeastFour.length - 1) + 1);
        const result = [selectLeastFour[randomizer], selectLeastFour[randomizer -1]];
        return result;
    };

    updateCrewState = () => {
        var renderCrewNames = this.getUnusedCrew();
        this.state.shownCrewmate1 = renderCrewNames[0];
        this.state.shownCrewmate2 = renderCrewNames[1];
    };

    handleRefresh = () => {
        this.forceUpdate();
    };
}
 
export default Overview;