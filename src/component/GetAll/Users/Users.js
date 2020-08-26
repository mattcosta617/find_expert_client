import React from 'react';
// import { Link } from 'react-router-dom';
import UserList from '../../Lists/UserList/UserList';


function User(props) {
    
    return(
        <div className="">
            <section>
                <h4>User Page</h4>
            </section>
                <UserList />
        </div>
    )
}

export default User;