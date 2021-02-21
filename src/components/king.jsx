import React, { Component } from 'react';
import GameSelect from './game-select'

class KingContent extends Component {
    constructor() {
        super();
    };

    handleTest = () => {
        console.log('king activated handler');
    };
    
    render() { 
        return (  
            <GameSelect 
                onTest={this.handleTest}
            />
        );
    }
}
 
export default KingContent;