import React, { Component } from 'react';
// import Language from '../Languages/Languages';
import ExpertModel from '../../../model/expert';
import { Link } from 'react-router-dom';


class ExpertList extends Component {
    state = {
        experts: [],
    }

    
    componentDidMount() {
    ExpertModel.getAllExperts()
    .then(res => this.setState({experts: res}))
    }
    
    render() {
        let experts = this.state.experts;
        const result = experts.map((expert) => {
            return  <Link to={`/experts/${expert._id}/`}>
                        <div key={expert._id}>
                            <h2>{expert.first_name}</h2>
                            <h2>{expert.last_name}</h2>
                            <h2>{expert.bio}</h2>
                            <p>{expert._id}</p>
                        </div>
                    </Link>

        })

        return (
            <div>
                {result}
            </div>
        )
    }
}

          

export default ExpertList;