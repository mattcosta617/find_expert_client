import React from 'react';
import UserModel from '../../..//model/user';
// import UserList from '../../Lists/UserList/UserList';
import axios from 'axios';

class NewUserContainer extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        UserModel.createUser(this.state)
        .then((result) => {
            console.log(result);
        });

        axios.post('http://localhost:5000/api/v1/users')
            .then(res => console.log(res.data));

            this.setState({
                username: '',
                email: '',
                password: '',
            })
    }

    render() {
        return (
            <div className="signupForm">
                <h1>Sign Up!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Username:</label>
                        <input onInput={this.handleChange} type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <input onInput={this.handleChange} type="text" name="email" />
                    </div>
                    <div>
                        <label htmlFor="">Password:</label>
                        <input onInput={this.handleChange} type="text" name="password" />
                    </div>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        )
    }
}

export default NewUserContainer;

// export default class NewUserContainer extends Component {
//     constructor(props) {
//         super(props);

//         this.onChangeUsername = this.onChangeUsername.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             username: '',
//             email: '',
//             password: ''
//         }
//     }

//     onChangeUsername(e) {
//         this.setState({
//             username: e.target.value,
//             email: e.target.value,
//             password: e.target.value,
//         });
//     }

//     onSubmit(e) {
//         e.preventDefault();

//         const user = {
//             username: this.state.username,
//             email: this.state.email,
//             password: this.state.password,
//         }

//     console.log(user);
    
//     axios.post('http://localhost:5000/api/v1/users/register', user)
//             .then(res => console.log(res.data));
    
//             this.setState({
//                 username: '',
//                 email: '',
//                 password: ''
//             })
//         }


//     render() {
//                 return (
//                     <div>
//                         <h1>Sign Up!</h1>
//                         <form onSubmit={this.handleSubmit}>
//                             <div>
//                                 <label htmlFor="">Username:</label>
//                                 <input onInput={this.handleChange} type="text" name="username" />
//                             </div>
//                             <div>
//                                 <label htmlFor="">Email:</label>
//                                 <input onInput={this.handleChange} type="text" name="email" />
//                             </div>
//                             <div>
//                                 <label htmlFor="">Password:</label>
//                                 <input onInput={this.handleChange} type="text" name="password" />
//                             </div>
//                             <button type="submit">Sign up</button>
//                         </form>
//                     </div>
//                 )
//             }
// };
