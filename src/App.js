import React from 'react';
import Routes from './config/routes';
import NavBar from './component/VisiblePages/NavBar/NavBar';
// import 'materialize-css';
//     import { Button, Card, Row, Col } from 'react-materialize';
import jwt_decode from 'jwt-decode';
import setAuthHeader from './utils/setAuthHeader';
import { withRouter } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem("token")
  }

  setCurrentUser = (token) => {
    // Store Token
    localStorage.setItem('token', token);
    // Set Auth Header
    setAuthHeader(token);
    // Decode Token
    const decodedToken = jwt_decode(token);
    // Set State
    this.setState({currentUser: decodedToken.id})
  };

  logout = () => {
    // Remove Token
    localStorage.removeItem('token');
    // Remove Auth Header
    setAuthHeader();
    // Set State
    this.setState({currentUser: ''});
    // Redirect
    this.props.history.push('/login');
  }

  render() {
  return (
    <div className="App">
      <NavBar currentUser={this.state.currentUser} logout={this.logout} /><br></br>
      <Routes setCurrentUser= {this.setCurrentUser} currentUser= {this.state.currentUser}/>
    </div>
  );
  }
}

// function withRouter(Component, props) {
//   return function(props) {
//     const routerProps = {
//       history: () => {},
//       goBack: () => {},
//     };

//     return <Component {...props} {...routerProps} />
//   }
// }

export default withRouter(App);
