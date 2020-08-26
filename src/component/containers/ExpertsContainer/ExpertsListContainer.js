import React from 'react';
import ExpertList from '../../GetAll/Experts/Experts';
import ExpertModel from '../../../model/expert';

class ExpertListContainer extends React.Component {
  state = {
    experts: [],
  };

  componentDidMount() {
    // Get All Languages
    ExpertModel.getAllExperts()
      .then((result) => {
        // console.log(result);
        this.setState({experts: result});
      })
      .catch((err) => console.log(err))
  }

  render() {
    return <ExpertList experts={this.state.experts} />;
  }
}

export default ExpertListContainer;