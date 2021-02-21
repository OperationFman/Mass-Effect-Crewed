import React, { Component } from 'react';
import GameSelect from './game-select'
import Overview from './crew-overview'

class KingContent extends Component {
    state = {
        content: 'gameSelect'
    }
    
    constructor() {
        super();
    };

    handleLoadMassEffect1 = () => {
        this.setState({ content: 'MassEffect1' })
    };
    
    render() { 
        const renderContent = () => {
            switch(this.state.content) {
                case 'MassEffect1':
                    return <Overview />
                default:
                    return <GameSelect onLoadMassEffect1Click={this.handleLoadMassEffect1}/>
            };
        };
        
        return (
            <React.Fragment>
                {renderContent()}
            </React.Fragment>
        );
    }
}
 
export default KingContent;