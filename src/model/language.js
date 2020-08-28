import axios from "axios";
const url = `http://localhost:5000/api/v1/languages`

class LanguageModel {

    static getAllLanguages = () => {
        return fetch(url)
        .then((response) => response.json())
    }

    static getLanguageById = (language) => {
        return axios.post(`${url}login`, language)
    }

    static createLanguage = (language) => {
        return axios.post(`${url}create`, language);
    }

}

export default LanguageModel;