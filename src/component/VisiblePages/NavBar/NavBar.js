import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import 'materialize-css';
// import { Button, Card, Row, Col } from 'react-materialize';
// import { withRouter } from 'react-router-dom';

import './NavBar.css';


function NavBar({ currentUser, logout }) {
    return(
        <nav>
            <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo homeNavigation" activeClassName="active">Find An Expert</NavLink>
            <ul className="rightNav">
                {/* <NavLink to="/experts"><li className="navClass">Experts</li></NavLink> */}
                <NavLink to="/languages" activeClassName="active"><li className="navClass">Languages</li></NavLink>
            {!currentUser && (
                <div>
                
                    <NavLink to="/login"><li className="navClass">Login</li></NavLink>
                </div>
                )}

                {currentUser && (
                <div>
                    <NavLink to="/profile" activeClassName="active">
                        <li className="navClass">Profile</li>
                    </NavLink>
                    
                    <span onClick={logout}>
                        <li className="navClass">Logout</li>
                    </span>
                </div>
                )}
            </ul>         
        </div> 
       </nav>
        )
    }


export default NavBar;
