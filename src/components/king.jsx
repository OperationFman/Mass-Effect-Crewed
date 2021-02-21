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
        console.log('Mass Effect 1 Clicked');
        this.setState({ content: 'MassEffect1' })
    };
    
    render() { 
        console.log(this.state.content)
        return (  
            <GameSelect 
                onLoadMassEffect1Click={this.handleLoadMassEffect1}
            />
        );
    }
}
 
export default KingContent;