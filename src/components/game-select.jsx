import React, { Component } from 'react';
import MassEffect1Button from './mass-effect1-button';
import MassEffect2Button from './mass-effect2-button';
import MassEffect3Button from './mass-effect3-button';

class GameSelect extends Component {
    state = {  }
    render() { 
        const { onLoadMassEffect1Click } = this.props;
        return ( 
            <React.Fragment>
                <MassEffect1Button 
                    onLoadMassEffect1Click={onLoadMassEffect1Click}
                />
                <MassEffect2Button />
                <MassEffect3Button />
            </React.Fragment>
        );
    }
}
 
export default GameSelect;
