import React, { Component } from 'react';

class CrewReload extends Component {
    generateTwoCrew() {
        console.log('Generate 2 Cerew Clicked');
    }

    render() {  
        return (
            <div className='crew-reload-container'>
                <div className='left-crew-options'>
                    <h2>Crew1</h2>
                    <div className='crew-divide-line'></div>
                    <h2>Crew2</h2>
                </div>
                <div className="right-refresh">
                    <button type="button" 
                        className="btn btn-outline-info"
                        style={{textAlign:"center", height:"80%", width:"80%", margin:"10% 0% 10% 10%"}}
                        >🗘</button>
                </div>
            </div> 
        );
    }
}
 
export default CrewReload;