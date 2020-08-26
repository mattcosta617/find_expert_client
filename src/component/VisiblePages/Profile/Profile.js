import React from 'react';
// import { Link } from 'react-router-dom';
import UserList from '../../Lists/UserList/UserList';
import ExpertList from '../../Lists/ExpertList/ExpertList';
// import Expert from '../../SingleFile/Expert/Expert'
// import LanguageModel from '../../model/language';

function Profile() {
    

    return(
        <div className="">
            <section>
                <h4>Expert Page</h4>
                <ExpertList />
                <UserList />                    {/* <Expert /> */}
            </section>
        </div>
    )
}

export default Profile;