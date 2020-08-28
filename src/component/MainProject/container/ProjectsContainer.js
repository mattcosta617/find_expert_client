import React, { Component } from 'react';
import ProjectModel from '../../../model/project';
import Projects from '../Project/Projects';
import CreateProjectForm from '../Forms/CreateProjectForm';


class ProjectsContainer extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  };
  
  componentDidMount() {
    this.fetchData();
  };
  
  fetchData = () => {
    ProjectModel.all().then((res) => {
        this.setState ({
        projects: res.data,
      });
    });
  };

createTodo = (project) => {
    let newProject = {
        body: project,
        completed: false,
    };
    
    ProjectModel.create(newProject).then((res) => {
        let projects = this.state.projects;
        projects.push(res.data);
        this.setState({ projects: projects });
    });
};

render() {
  return (
    <div className="main">
      <CreateProjectForm
        createProject={this.createProject} />

      <Projects
        projects={this.state.projects} />
    </div>
  );
};
 
};

export default ProjectsContainer;