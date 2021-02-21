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
    };
    
    render() { 
        return (  
            <GameSelect 
                onLoadMassEffect1Click={this.handleLoadMassEffect1}
            />
        );
    }
}
 
export default KingContent;