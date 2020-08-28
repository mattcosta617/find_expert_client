import React, { Component } from 'react';
import ProjectModel from '../../../model/project';
import Projects from '../Project/Projects';
import CreateProjectForm from '../Forms/CreateProjectForm';


class ProjectsContainer extends Component {
  constructor() {
    super();
    this.state = {
      projects: [{
          name: "",
          project_url: "",
      }],
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

  createProject = (project) => {
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

    deleteProject = (project) => {
        ProjectModel.delete(project).then((res) => {
            let projects = this.state.projects.filter((project) => {
              return project._id !== res.data._id;
            });
            this.setState({projects});
        });
    };
    

updateProject = project => {
    const isUpdatedProject = upd => {
        return upd._id === project._id;
    };

    ProjectModel.update(project)
        .then((res) => {
          let projects = this.state.projects;
          projects.find(isUpdatedProject).body = project.body;
          this.setState({ projects: projects });
        });
  };

  render() {
    return (
      <div className="projectsComponent">
        <CreateProjectForm
          createProject={ this.createProject }
        />
        <Projects
          projects={ this.state.projects }
          updateProject={ this.updateProject } 
          deleteProject={ this.deleteProject }
          />
      </div>
    );
  };
 
};

export default ProjectsContainer;