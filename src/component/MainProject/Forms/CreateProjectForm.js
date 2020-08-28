import React, { Component } from 'react';

class CreateProjectForm extends Component {
  state = {
    name: '',
    project_url: '',
  };
  
  onInputChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };
  
  onFormSubmit = (event) => {
    event.preventDefault();
    let project = this.state.project;
    this.props.createProject(project);
    this.setState({
      project: '',
    });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} id="newProjectForm">
          <input  
            onChange={this.onInputChange} 
            type="text" id="newProjectDescription" name="name"
            placeholder="Project Name" 
            value={this.state.value}
          />
          <input  
            onChange={this.onInputChange} 
            type="text" id="newURL" 
            placeholder="Project URL" name="project_url"
            value={this.state.value}
          />
          <button type="submit" id="addProject" className="btn">Add Project</button>
        </form>
      </div>
    );
  };
};

export default CreateProjectForm;