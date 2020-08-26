import React from 'react';
import ExpertModel from '../../../model/expert'

class Expert extends React.Component {
    state = {
        expert: {},
    }

    componentDidMount() {

        ExpertModel.getExpertById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({expert: result});
            })
            .catch((err) => console.log(err))
    }
    render() {
        console.log(this.props);
    return (
        <h1>Experts Page</h1>
        )
    }
}



export default Expert;