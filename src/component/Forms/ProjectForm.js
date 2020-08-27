import React, { Component } from 'react';
import ProjectModel from '../../model/project';

export default class ProjectForm extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            project_url: ''
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
            const data = await ProjectModel.createProject(this.state)
            if(data) {
                this.setState({
                    name: '',
                    project_url: ''
                })
                
            this.props.history.push('/projects');
            }
        } catch (err){console.log(err)}
    
        }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="projectForm">
          <input  
            onChange={this.onInputChange} 
            type="text" id="newProject" 
            placeholder="Project name" 
            value={this.state.project}
          />
          <input  
            onChange={this.onInputChange} 
            type="text" id="newProjectUrl" 
            placeholder="Project URL" 
            value={this.state.project}
          />
          <button type="submit" id="addProject" className="btn2">Add Project</button>
        </form>
      </div>
    );
  };
};
