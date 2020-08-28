// import axios from "axios";
const url = 'http://localhost:5000/api/v1/experts'

class ExpertModel {

    static getAllExperts = () => {
        return fetch(url)
        .then((response) => response.json())
    }

    static getExpertById = (expertId) => {
        return fetch(`${url}/${expertId}`)
        .then((response) => response.json())
    }

    static createExpert = (expert) => {
        return fetch(url, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(expert)
        })
        .then((response) => response.json())
    }
}

export default ExpertModel;

// first_name: String,
//     last_name: String,
//     bio: String,