import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';
// import { withRouter } from 'react-router-dom';

import './NavBar.css';


class NavBar extends Component {
    render() {
    return(
        <nav>
            <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo homeNavigation" activeClassName="active">Find An Expert</NavLink>
            <ul className="rightNav">
            <NavLink to="/experts"><li className="navClass">Experts</li></NavLink>
            <NavLink to="/languages" activeClassName="active"><li className="navClass">Languages</li></NavLink>
            <NavLink to="/profile" activeClassName="active"><li className="navClass">Profile</li></NavLink>
            </ul>         
        </div> 
       </nav>
        )
    }
}

export default NavBar;
