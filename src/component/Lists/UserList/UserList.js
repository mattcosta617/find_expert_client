import React, { Component } from 'react';
// import Language from '../Languages/Languages';
import UserModel from '../../../model/user';
import { Link } from 'react-router-dom';



class UserList extends Component {
    state = {
        users: [],
    }
    
    componentDidMount() {
    UserModel.getAllUsers()
    .then(res => this.setState({users: res}))
    }
    
    render() {
        let users = this.state.users;
        const result = users.map((user) => {
            return (
            <Link to={`/profile/new`}>
                        <div className="userListed">
                            <h1>{user.username}</h1>
                            <h4>{user.email}</h4>
                        </div>
                    </Link>
            )
        })

        return (
            <div>
                {result}
            </div>
        )
    }
}


export default UserList;