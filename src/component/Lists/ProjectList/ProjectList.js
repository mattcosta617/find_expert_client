import React, { Component } from 'react';
import ProjectModel from '../../../model/project';
import { Link } from 'react-router-dom';



class ProjectList extends Component {
    state = {
        projects: [],
    }

    
    componentDidMount() {
    ProjectModel.getAllProjects()
    .then(res => this.setState({projects: res}))
    }
    
    render() {
        let projects = this.state.projects;
        const result = projects.map((project) => {
            return  <Link to={`/projects/${project._id}`}>
                        <div>
                            <h2>{project.name}</h2>
                            <p>{project.url}</p>
                            <p>{project._id}</p>
                        </div>
                    </Link>

        })

        return (
            <div id="projectList">
                {result}
            </div>
        )
    }
}

          

export default ProjectList;