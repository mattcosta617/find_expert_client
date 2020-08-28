import React, { Component } from 'react';

class ProjectForm extends Component {
  constructor() {
    super();
    this.state = {
        project: {
      name: '',
      project_url: '',
        }
    };
  };

  onChange = (event) => {
    this.setState({
      project: event.target.value,
    });
  };
  
  
  onSubmit = (event) => {
    event.preventDefault();
    let project = this.state.project;
    this.props.createProject(project);
    this.setState({
      project: '',
    });
  };

  render() {
    return (
      <div style={this.props.style} className='projectForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Project Name'
            type='text'
            value={this.state.project.name} />
            <input
            autoFocus={this.props.state}
            onChange={ this.onChange }
            placeholder='Project url'
            type='text'
            value={this.state.project.project_url} />
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  };
};

export default ProjectForm;