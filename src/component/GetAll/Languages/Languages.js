import React from 'react';
// import { Link } from 'react-router-dom';
import LanguageList from '../../Lists/LanguageList/LanguageList';
// import LanguageModel from '../../model/language';

function Language(props) {
    

    return(
        <div className="">
            <h1 className="head">Language Page</h1>
              
            
                <LanguageList />
        </div>
    )
}

export default Language;