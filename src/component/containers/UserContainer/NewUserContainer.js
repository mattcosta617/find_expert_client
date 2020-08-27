import React, { Component } from 'react';
import UserModel from '../../..//model/user';
import axios from 'axios';
// import UserList from '../../Lists/UserList/UserList';


// class NewUserContainer extends React.Component {
//     state = {
//         username: '',
//         email: '',
//         password: '',
//     };

//     onChange = (event) => {
//         this.setState({
//         [event.target.name]: event.target.value
//         })
//     };

//     onSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state)
//         UserModel.createUser(this.state)
//         .then((result) => {
//             console.log(result);
//         })
//         .catch ((err) => {
//             console.log(err);
//         })
//     }

//     render() {
//         console.log('Render ran. state = ', this.state)
//         return (
//             <div className="signupForm">
//                 <h1>Sign Up!</h1>
//                 <form onSubmit={this.onSubmit}>
//                     <div>
//                         <input onChange={this.onChange} type="text" name="username" placeholder="username"
//                         value={this.state.value} />
//                     </div>
//                     <div>
//                         <input onChange={this.onChange} type="text" name="email" placeholder="email" value={this.state.value} />
//                     </div>
//                     <div>
//                         <input onChange={this.onChange} type="text" name="password" placeholder="password" value={this.state.value} />
//                     </div>
//                     <button type="submit">Sign up</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default NewUserContainer;

export default class NewUserContainer extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        UserModel.createUser(this.state)
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }

    console.log(user);
    
    axios.post('http://localhost:5000/api/v1/users/register', user)
            .then(res => console.log(res.data));
    
            this.setState({
                username: '',
                email: '',
                password: ''
            })
        }


    render() {
                return (
                    <div>
                        <h1>Sign Up!</h1>
                        <form onSubmit={this.onSubmit}>
                            <div>
              
                                <input className="input" onChange={this.onChange} type="text" name="username" placeholder="username" />
                            </div>
                            <div>
            
                                <input className="input" onChange={this.onChange} type="text" name="email" placeholder="email" />
                            </div>
                            <div>
                      
                                <input className="input" onChange={this.onChange} type="text" name="password" placeholder="password" />
                            </div>
                            <button type="submit" className="btn2">Sign up</button>
                        </form>
                    </div>
                )
            }
};
