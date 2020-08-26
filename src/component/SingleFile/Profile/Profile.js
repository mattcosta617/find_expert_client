import React from 'react';
// import { Link } from 'react-router-dom';
import UserList from '../../Lists/UserList/UserList';
import ExpertList from '../../Lists/ExpertList/ExpertList';
// import LanguageModel from '../../model/language';

function Profile(props) {
    

    return(
        <div className="">
            <section>
                <h4>User Page</h4>
                    <ExpertList />
                    <UserList />
            </section>
        </div>
    )
}

export default Profile;