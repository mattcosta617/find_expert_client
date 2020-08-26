import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'materialize-css';
    // import { Button, Card, Row, Col } from 'react-materialize';
// import { withRouter } from 'react-router-dom';

import './NavBar.css';


class NavBar extends Component {
    render() {
    return(
        <nav>
            <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo homeNavigation" activeClassName="active">Find An Expert</NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down" id="navigation">
                <li className="navClass"><Link to="/#about">About</Link></li>
                <li className="navClass"><NavLink to="/languages" activeClassName="active">Languages</NavLink></li>
                <li className="navClass"><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
            </ul>         
        </div> 
       </nav>
        )
    }
}

export default NavBar;
