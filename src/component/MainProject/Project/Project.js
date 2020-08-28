import React, { Component } from 'react';

class Project extends Component {

  deleteClickedProject = () => {
    this.props.deleteProject(this.props.project);
  };
  
  render() {
    return (
      <li data-projects-index={this.props.project._id}>
        <span className="project-item">{this.props.project.body}</span>
        <span
          className='remove'
          onClick={this.deleteClickedProject}>
          <button className="btn2">Remove</button>
        </span>
      </li> 
    );
  };
};


export default Project;