import React from 'react';
import NewUserContainer from '../../containers/UserContainer/NewUserContainer';


function Signup(props) {
    console.log(props)
    return (
        <div id="signup">
            <NewUserContainer setCurrentUser={props.setCurrentUser} currentUser={props.currentUser} />
        </div>
    )
}

export default Signup;