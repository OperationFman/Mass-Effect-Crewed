import React, { Component } from 'react';
import logo from '../static/Logo.png';

class Header extends Component {
    render() { 
        return (  
            <img src={logo} className="" alt="logo" />
        );
    };
}
 
export default Header;