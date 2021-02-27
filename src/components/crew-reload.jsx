import React, { Component } from 'react';

class CrewReload extends Component {
    generateTwoCrew() {
        console.log('Generate 2 Crew Clicked');
    }

    getUnusedCrew = () => {
        const localizeCrewList = this.props.crew;
        const selectLeastFour = localizeCrewList.slice(-4);
        const randomizer = Math.floor(Math.random() * selectLeastFour.length); 
        const result = [selectLeastFour[randomizer], selectLeastFour[randomizer - 1]];
        console.log(selectLeastFour);
        console.log(result);
        console.log(randomizer);
    };

    render() { 
        return (
            <div className='crew-reload-container'>
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                {this.getUnusedCrew()}
                <div className='left-crew-options'>
                    <h2>Tali</h2>
                    <div className='crew-divide-line'></div>
                    <h2>Zaeed</h2>
                </div>
                <div className="right-refresh">
                    <button type="button" 
                        className="btn btn-outline-info"
                        style={{textAlign:"center", height:"90%", width:"100%", 
                        fontSize:"calc(30px + 2vmin)"}}
                        >🗘</button>
                </div>
            </div> 
        );
    }
}
 
export default CrewReload;