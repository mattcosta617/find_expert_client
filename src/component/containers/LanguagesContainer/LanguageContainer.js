import React from 'react';
import LanguageList from '../../GetAll/Languages/Languages';
import LanguageModel from '../../../model/language';

class LanguageListContainer extends React.Component {
  state = {
    languages: [],
  };

  componentDidMount() {
    // Get All Languages
    LanguageModel.getAllLanguages()
      .then((result) => {
        // console.log(result);
        this.setState({languages: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    return <LanguageList languages={this.state.languages} />;
  }
}

export default LanguageListContainer;