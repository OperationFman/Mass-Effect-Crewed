import React, { Component } from 'react';

class CrewReload extends Component {
    generateTwoCrew() {
        console.log('Generate 2 Crew Clicked');
    }

    getLastFourCrewmates = () => {
        const {crew} = this.props;
        const lastFourCrewmates = []
        lastFourCrewmates.push(crew[crew.length -1]);
        lastFourCrewmates.push(crew[crew.length -2]);
        lastFourCrewmates.push(crew[crew.length -3]);
        lastFourCrewmates.push(crew[crew.length -4]);
        return lastFourCrewmates;
    };

    getRandomTwoFromLastFourCrewmates = () => {
        //lastFourCrewmates = getLastFourCrewmates();
        //TODO
    }

    render() { 
        return (
            <div className='crew-reload-container'>
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