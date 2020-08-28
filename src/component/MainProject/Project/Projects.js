import React from 'react';
import Project from './Project';

const Projects = (props) => {
    let projects = props.projects.map((project) => {
        console.log(project)
        return (
            <Project
            key={project._id}
            project={project} />
            );
  });
  return (
    <ul>
      {projects}
    </ul>
  );
};

export default Projects;