import React, { Component } from 'react';
import UserModel from '../../..//model/user';

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

    onSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = await UserModel.createUser(this.state)
            if(data) {
                this.setState({
                username: '',
                email: '',
                password: ''
            })
            
            this.props.history.push('/login')
            }
        } catch (err){console.log(err)}
    
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
