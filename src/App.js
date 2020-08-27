import React from 'react';
import Routes from './config/routes';
import NavBar from './component/VisiblePages/NavBar/NavBar';
// import 'materialize-css';
//     import { Button, Card, Row, Col } from 'react-materialize';
import { withRouter } from 'react-router-dom';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: localStorage.getItem("uid")
  }

  setCurrentUser(token) {
    this.setState({currentUser: token})
    localStorage.setItem("uid", token)
  }

  render() {
  return (
    <div className="App">
      <NavBar />
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
