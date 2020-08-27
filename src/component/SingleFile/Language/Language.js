import React from 'react';
import LanguageModel from '../../../model/language'
import UserList from '../../Lists/UserList/UserList';
// import { Link } from 'react-router-dom';

class Language extends React.Component {
    state = {
        language: [],
    }

    componentDidMount() {
        LanguageModel.getLanguageById(this.props.match.params.id)
            // .then((response) => response.json())
            .then((result) => {
                // console.log(result);
                this.setState({language: result});
            })
            .catch((err) => console.log(err))
    }



    render() {
        let language = this.state.language;
        return (
            <div>
                <section className="main">
                <h1>Hello, This is the language page</h1>
                    <h3>{language.language}</h3>
                    <h3>{language._id}</h3>
                    <div>
                    <h2><UserList /></h2>
                    </div>
                </section>
            </div>
        )

    }

    
    }



export default Language;