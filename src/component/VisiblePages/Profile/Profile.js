import React from 'react';
// import { Link } from 'react-router-dom';
import UserList from '../../Lists/UserList/UserList';
import ExpertList from '../../Lists/ExpertList/ExpertList';
import ProjectList from '../../Lists/ProjectList/ProjectList';
// import Expert from '../../SingleFile/Expert/Expert'
// import LanguageModel from '../../model/language';

function Profile() {
    

    return(
    
        <div id="profile">
            <section className="main">
                <h4>Expert Page</h4>
                <ExpertList />
                <UserList />  
                <ProjectList />                  
                {/* <Expert /> */}
            </section>
        </div>
    )
}

export default Profile;