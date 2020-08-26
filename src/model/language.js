const url = `http://localhost:5000/api/v1/languages`

class LanguageModel {
    static getAllLanguages = () => {
        return fetch(url)
        .then((response) => response.json())
    }

    static getLanguageById = (languageId) => {
        return fetch(`${url}/${languageId}`)
        .then((response) => response.json())
    }

    static createLanguage = (language) => {
        return fetch(url, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(language)
        })
        .then((response) => response.json())
    }
}

export default LanguageModel;