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
    //     let request = axios.post(url, project);
    //     return request;
    //   };

        static all = () => {
          let request = axios.get(url);
          return request;
        };
      
        static create = (project) => {
            let request = axios.post(url, project);
            return request;
          };

          static delete = (project) => {
            let request = axios.delete(`${url}/${project._id}`);
            return request;
          };
};

    // static createProject = (project) => {
    //     return fetch(url, {
    //         method: 'POST',
    //         header: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(project)
    // .then((response) => response.json())

export default ProjectModel;
