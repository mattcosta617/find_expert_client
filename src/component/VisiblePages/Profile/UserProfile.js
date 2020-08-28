import React from 'react';
// import EditProfile from '../EditProfile/EditProfile';
import { Link } from 'react-router-dom';
import UserModel from '../../../model/user';


class UserProfile extends React.Component {
    state = {
        user: []
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
       
        UserModel.getAllUsers()
        // .then((response) => response.json())
        .then((result) => {
                console.log(result, "This is line 16**********")
                this.setState({user: result})
            })
            .catch((err) => console.log(err))
        };

    

    
    render() {
        let users = this.state.user;
        const result = users.map((user) => {
            return (
                <Link to={`/profile/edit`}>
                            <div className="userListed main">
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
};




export default UserProfile;
