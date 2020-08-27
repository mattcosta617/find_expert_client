import React from 'react';
import LoginContainer from '../../containers/LoginContainer/LoginContainer'

function Login(props) {
    console.log(props)
    return (
        
        <div id="login">
            <LoginContainer setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} />
        </div>
    )
}

export default Login;