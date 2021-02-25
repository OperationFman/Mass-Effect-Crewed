import React, { Component } from 'react';
import ShowCrewButton from './show-crew-button';
import ShowCrewList from './show-crew-list';

class ShowCrew extends Component {
    state = {  
        crewDetails: 'hidden',
    };
    
    handleShowCrew = () => {
        this.setState({crewDetails: 'shown'})
    }
    
    render() { 
        console.log(this.state.crew);
        
        const renderShowCrew = () => {
            switch(this.state.crewDetails) {
                case 'shown':
                    return <ShowCrewList crew={this.state.crew}/>
                default: 
                    return <ShowCrewButton onClickShowCrew={this.handleShowCrew}/>
            };
        };
        
        return (  
            <div className="show-crew-container">
                {renderShowCrew()}
            </div>
        );
    }
}
 
export default ShowCrew;