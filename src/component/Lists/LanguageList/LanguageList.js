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
            return   <div>
            <Link to={`/languages/${language._id}`}>
                        <div className="langs">
                            <h1 key={language._id}>{language.language}</h1>
                           
                        </div>
                    </Link>
            </div>
        })

        return (
            <div class="languageList">
                <section className="main">
                    {result}
                </section>
            </div>
        )
    }
}

          

export default LanguageList;