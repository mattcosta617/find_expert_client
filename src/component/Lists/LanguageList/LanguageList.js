import React, { Component } from 'react';
// import Language from '../Languages/Languages';
import LanguageModel from '../../../model/language';
import { Link } from 'react-router-dom';



class LanguageList extends Component {
    state = {
        languages: [],
    }

    
    componentDidMount() {
    LanguageModel.getAllLanguages()
    .then(res => this.setState({languages: res}))
    }
    
    render() {
        let languages = this.state.languages;
        const result = languages.map((language) => {
            return  <Link to={`/languages/${language._id}`}>
                        <div>
                            <h2 key={language.language}>{language.language}</h2>
                            <p key= {language._id}>{language._id}</p>
                        </div>
                    </Link>

        })

        return (
            <div id="languageList">
                <section className="main">
                    {result}
                </section>
            </div>
        )
    }
}

          

export default LanguageList;