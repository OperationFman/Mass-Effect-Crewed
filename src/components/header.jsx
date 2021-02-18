import React, { Component } from 'react';
import logo from '../static/logo.svg';

class Header extends Component {
    render() { 
        return (  
            <img src={logo} className="" alt="logo" />
        );
    };
}
 
export default Header;