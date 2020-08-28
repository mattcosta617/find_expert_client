import React, { Component } from 'react';
import ProjectForm from '../Forms/CreateProjectForm';

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formStyle: {
        display: 'none',
      },
    };
  };

  toggleBodyForm = () => {
    this.state.formStyle.display === 'block'
    ? this.setState({ formStyle: {display: 'none'} })
    : this.setState({ formStyle: {display:'block'} });
  };

  deleteClickedProject = () => {
    this.props.deleteProject(this.props.project);
  };
  
  render() {
    return (
      <li data-projects-index={this.props.project._id}>
            <div>
              <span className="project-item">
                {this.props.project.body}</span>
              <span
                className='edit' 
                onClick={this.toggleBodyForm}>
                <button className="btn2">Edit</button>
              </span>
              <span
                className='remove' 
                onClick={this.deleteClickedProject}>
                <button className="btn2">Remove</button>
              </span>
            </div>
            <ProjectForm 
              project={this.props.project}
              style={this.state.formStyle}
              autoFocus={true}
              buttonName="Update Project!"
              updateProject={this.props.updateProject}
              toggleBodyForm={this.toggleBodyForm} />
          </li> 
    );
  };
};


export default Project;