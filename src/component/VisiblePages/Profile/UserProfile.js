import React from 'react';
// import EditProfile from '../EditProfile/EditProfile';
import { Link } from 'react-router-dom';
import UserModel from '../../../model/user';


class UserProfile extends React.Component {
    state = {
        user: {}
    }

    // componentDidMount() {
    //     console.log("above User Model");
    //     UserModel.verifyUser(this.props.match.params.id)
    //     // .then((response) => response.json())
    //     .then((result) => {
    //             console.log(result, "This is line 16**********")
    //             this.setState({user: result});
    //         })
    //         .catch((err) => console.log(err))
    // }

    componentDidMount() {
        console.log("above User Model");
        UserModel.login(this.props.match.params.id)
        // .then((response) => response.json())
        .then((result) => {
                console.log(result, "This is line 16**********")
                this.setState({user: result})
            })
            .catch((err) => console.log(err))
        }

    render() {
        let user = this.props.match.params.id;
        return (
            <div className="main">
                <h1>Hello, This is the user page</h1>
                    <h3>{user.username}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user._id}</h3>
                    <button><Link to={`/projects`}>Projects</Link></button>
            </div>
        )
    }
}



export default UserProfile;
