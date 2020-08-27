import axios from "axios";
const url = `http://localhost:5000/api/v1/projects`

class ProjectModel {
    static getAllProjects = () => {
        return fetch(url)
        .then((response) => response.json())
    }

    static getProjectById = (project) => {
        return fetch(`${url}/${project}`)
        .then((response) => response.json())
    }

    // static createProject = (project) => {
    //     return fetch(url, {
    //         method: 'POST',
    //         header: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(project)
    // .then((response) => response.json())


    static createProject = (project) => {
        return axios.post(url, project);
    }
}

export default ProjectModel;
