import React, { Component } from 'react';
import axios from 'axios';
import UserModel from '../../../model/user';

export default class LoginContainer extends Component {
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
        UserModel.getUserById(this.state)
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }

    console.log(user);
    
    axios.post('http://localhost:5000/api/v1/users/login', user)
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
                        <h1>Login!</h1>
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
                            <button type="submit" className="btn2">Login</button>
                        </form>
                    </div>
                )
            }
};
