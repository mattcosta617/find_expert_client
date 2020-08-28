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
    return (
    <div className="main">
      <h1>Languages</h1>
    <LanguageList languages={this.state.languages} />;
    </div>
    )
  }
}

export default LanguageListContainer;