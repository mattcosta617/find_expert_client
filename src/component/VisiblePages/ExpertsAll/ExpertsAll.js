import React from 'react';
import ExpertList from '../../Lists/ExpertList/ExpertList'

function ExpertsAll() {
    return (
        <div id="expertsAll">
            <section className="main">
                <h1>Experts</h1>
                <h3><ExpertList /></h3>
            </section>
        </div>
    )
}

export default ExpertsAll;