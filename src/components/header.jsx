import React, { Component } from 'react';
import logo from '../static/Logo.png';

class Header extends Component {
    render() { 
        return (  
            <img src={logo} className="Header" alt="logo" />
        );
    };
}
 
export default Header;