import React, { Component } from 'react';

class CrewReload extends Component {
    getUnusedCrew = () => {
        const localizeCrewList = this.props.crew;
        const selectLeastFour = localizeCrewList.slice(-4);
        const randomizer = Math.floor(Math.random() * (selectLeastFour.length - 1) + 1);
        const result = [selectLeastFour[randomizer], selectLeastFour[randomizer -1]];
        return result;
    };

    render() { 
        var renderCrewName = this.getUnusedCrew()
        return (
            <div className='crew-reload-container'>
                <div className='left-crew-options'>
                    <h2>{renderCrewName[0]}</h2>
                    <div className='crew-divide-line'></div>
                    <h2>{renderCrewName[1]}</h2>
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