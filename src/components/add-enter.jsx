import React, { Component } from 'react';
import AddEnterButtons from './add-enter-buttons';
import AddEnterForm from './add-enter-form';

class AddEnter extends Component {
    state = {
        view: 'buttons'
    }

    constructor() {
        super();
    }

    handleOpenForm = () => {
        this.setState({view: 'form'})
    }
    
    render() { 
        const renderAddEnter = () => {
            switch(this.state.view) {
                case 'form':
                    return <AddEnterForm />
                default:
                    return <AddEnterButtons onClickAddEnterForm={this.handleOpenForm}/>
            };
        };
        
        return (  
            <div className="add-enter-container">
                {renderAddEnter()}
            </div>
        );
    }
}
 
export default AddEnter;