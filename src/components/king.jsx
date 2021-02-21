import React, { Component } from 'react';
import GameSelect from './game-select'

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
        console.log(this.state.content)
        const renderContent = () => {
            switch(this.state.content) {
                case 'gameSelect':
                    return <GameSelect onLoadMassEffect1Click={this.handleLoadMassEffect1}/>
                case 'MassEffect1':
                    return <h1>Hello World!</h1>
                default:
                    return "It defaulted"
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