import axios from "axios";
const url = 'http://localhost:5000/api/v1/users/';

class UserModel {
    static getAllUsers = () => {
        return fetch(url)
        .then((response) => response.json())
    }

    static login = (user) => {
        return axios.post(`${url}login`, user)
        // .then((response) => response.json())
    }

    static createUser = (user) => {
        return axios.post(`${url}register`, user);
    }

    static verifyUser = (user) => {
        return fetch(`${url}verify`, user)
        .then((response) => response.json())
    }
}

export default UserModel;