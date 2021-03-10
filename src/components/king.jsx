import React, { Component } from 'react';
import GameSelect from './game-select'
import Overview from './overview'

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

    handleLoadMassEffect2 = () => {
        this.setState({ content: 'MassEffect2' })
    };

    handleLoadMassEffect3 = () => {
        this.setState({ content: 'MassEffect3' })
    };
    
    render() { 
        const renderContent = () => {
            switch(this.state.content) {
                case 'MassEffect1':
                    return <Overview gameTitle='MassEffect1'
                                     userId={this.props.userId}
                    />
                case 'MassEffect2':
                    return <Overview gameTitle='MassEffect2'
                                     userId={this.props.userId}
                    />
                case 'MassEffect3':
                    return <Overview gameTitle='MassEffect3'
                                     userId={this.props.userId}
                    />
                default:
                    return <GameSelect onLoadMassEffect1Click={this.handleLoadMassEffect1}
                                       onLoadMassEffect2Click={this.handleLoadMassEffect2}
                                       onLoadMassEffect3Click={this.handleLoadMassEffect3}
                    />
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