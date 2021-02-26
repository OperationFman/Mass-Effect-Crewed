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

    handleHideCrew = () => {
        this.setState({crewDetails: 'hidden'})
    }
    
    render() { 
        const {crew} = this.props;
        
        const renderShowCrew = () => {
            switch(this.state.crewDetails) {
                case 'shown':
                    return <ShowCrewList crew={crew}
                                         onClickHideCrew={this.handleHideCrew}/>
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