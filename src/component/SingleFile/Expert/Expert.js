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
        let expert = this.state.expert;
        console.log(this.props);
        console.log(expert)
    return (
        <div>
            <h1>Experts Page</h1>
            <h3>{expert}</h3>
        </div>
        )
    }
}



export default Expert;