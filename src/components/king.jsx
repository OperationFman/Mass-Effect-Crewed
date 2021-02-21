import React, { Component } from 'react';
import GameSelect from './game-select'

class KingContent extends Component {
    constructor() {
        super();
    };

    handleLoadMassEffect1 = () => {
        console.log('king activated handler');
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