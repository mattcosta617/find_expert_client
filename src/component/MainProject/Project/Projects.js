import React from 'react';
import Project from './Project';

const Projects = (props) => {
  let projects = props.projects.map((project) => {
    return (
      <Project
        key={project._id}
        project={project}
        deleteProject={props.deleteProject}
        updateProject={props.updateProject} 
        />
    );
  });
  return (
    <ul>
      {projects}
    </ul>
  );
};

export default Projects;