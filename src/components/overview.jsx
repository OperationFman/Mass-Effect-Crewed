import React, { Component } from 'react';
import axios from 'axios';
import CrewReload from './crew-reload';
import AddEnter from './add-enter';
import ShowCrew from './show-crew';

class Overview extends Component {
    state = {  
        crew: [],
        shownCrewmate1: 'Refresh',
        shownCrewmate2: 'To Start',
    };

    static getDerivedStateFromProps(props) {
        const { gameTitle } = props;
        const { saveData } = props
        return {crew: saveData[gameTitle] };
    }

    render() {
        return ( 
            <div className="overview-container">
                <CrewReload crew={this.state.crew}
                            shownCrewmate1={this.state.shownCrewmate1}
                            shownCrewmate2={this.state.shownCrewmate2}
                            updateCrewState={this.updateCrewState}
                            handleRefresh={this.handleRefresh}
                            />
                <AddEnter crew={this.state.crew}
                          handleConfirm={this.handleConfirm}
                          addCrew={this.handleAddCrew}
                            />
                <ShowCrew crew={this.state.crew}
                          removeCrewmate={this.removeCrewmate}
                            />
            </div>
        );
    }

    handleConfirm = () => {
        if (this.state.shownCrewmate1 != 'Refresh') {
            let getCrew = this.state.crew;
            const crew1Index = getCrew.indexOf(this.state.shownCrewmate1);
            getCrew.splice(crew1Index, 1)
            const crew2Index = getCrew.indexOf(this.state.shownCrewmate2);
            getCrew.splice(crew2Index, 1)
            getCrew.splice(0, 0, this.state.shownCrewmate1)
            getCrew.splice(0, 0, this.state.shownCrewmate2)
            this.setState({ crew: getCrew })
            this.handleUpdateBackend()
        } else {
            console.log("'Refresh' and 'To Start' aren't crew fam");
        }
    }

    getUnusedCrew = () => {
        const localizeCrewList = this.state.crew;
        const selectLeastFour = localizeCrewList.slice(-4);
        let result = [];
        // If crew == 2, return them, if == 3 randomly return 2, if 4+ return 2 of the last 4
        if (selectLeastFour == 2) {
            result = selectLeastFour
        } else if (selectLeastFour == 3) {
            const randomizerOfThree = Math.floor(Math.random() * 2);
            result = [selectLeastFour[randomizerOfThree], selectLeastFour[randomizerOfThree + 1]];
        } else {
            const randomizer = Math.floor(Math.random() * (selectLeastFour.length - 1) + 1);
            result = [selectLeastFour[randomizer], selectLeastFour[randomizer -1]];
        }
        return result
    };

    removeCrewmate = (name) => {
        let getCrew = this.state.crew;
        if (getCrew.length < 3) {
            console.log('You need a minimum of 2 crew')
        } else {
            let index = getCrew.indexOf(name);
            getCrew.splice(index, 1)
            this.setState({ crew: getCrew })
            this.handleUpdateBackend()
        }
    }

    updateCrewState = () => {
        var renderCrewNames = this.getUnusedCrew();
        this.setState({shownCrewmate1: renderCrewNames[0]});
        this.setState({shownCrewmate2: renderCrewNames[1]});
    };

    handleUpdateBackend = () => { 
        axios
          .post(`https://mass-effect-crewed-backend.herokuapp.com/api/update/${this.props.userId}`, this.props.saveData)
          .catch(err => {
            console.error(err);
          });
      };

    handleAddCrew = (name) => {
        let getCrew = this.state.crew;
        getCrew.push(name);
        this.setState({ crew: getCrew })
        this.handleUpdateBackend()
    };
}
 
export default Overview;