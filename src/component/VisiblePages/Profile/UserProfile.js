import React from 'react';
// import EditProfile from '../EditProfile/EditProfile';
import { Link } from 'react-router-dom';
import UserModel from '../../../model/user';


class UserProfile extends React.Component {
    state = {
        user: {}
    }

    componentDidMount() {
        UserModel.getUserById(this.props.match.params.id)
            // .then((response) => response.json())
            .then((result) => {
                console.log(result);
                this.setState({user: result});
            })
            .catch((err) => console.log(err))
    }



    render() {
        let user = this.state.user;
        return (
            <div>
                <h1>Hello, This is the user page</h1>
                    <h3>{user.username}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user._id}</h3>
                    <button><Link to={`/profile/${user._id}/edit`}>Edit Profile</Link></button>
            </div>
        )

    }

    
    }



export default UserProfile;
