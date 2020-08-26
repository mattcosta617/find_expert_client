import React from 'react';
import LanguageModel from '../../../model/language'

class Language extends React.Component {
    state = {
        langauge: {},
    }

    componentDidMount() {

        LanguageModel.getLanguageById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({language: result});
            })
            .catch((err) => console.log(err))
    }
    render() {
        console.log(this.props);
    return (
        <h1>Languages Page</h1>
        )
    }
}



export default Language;