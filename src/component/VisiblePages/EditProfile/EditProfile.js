import React, { Component } from 'react';
// import axios from 'axios';
// import ProjectModel from '../../../model/user';
// import ProjectForm from '../../containers/ProjectContainer/ProjectsContainer';

export default class EditProfile extends Component {
    // constructor(props) {
    //     super(props);

    //     this.onChange = this.onChange.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);

    //     this.state = {
    //         username: '',
    //         email: '',
    //         password: ''
    //     }
    // }

    // onChange(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    // onSubmit = async (e) => {
    //     e.preventDefault();
    //     try{
    //         const data = await ProjectModel.login(this.state)
    //         console.log(data);
    //         if(data) {
    //             this.props.setCurrentUser(data.data.token)
    //             this.setState({
    //             username: '',
    //             email: '',
    //             password: ''
    //         })

    //         this.props.history.push("/profile")
    //         }
    //     } catch (err){console.log(err)}
    
    //     }


    render() {
        // console.log(this.props)
                return (
                    <div>
                        <section className="main"> 
                           <h1>Edit Profile Page</h1>
                        </section>
                    </div>
                )
            }
};
