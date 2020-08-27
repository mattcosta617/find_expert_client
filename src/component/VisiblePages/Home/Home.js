import React from 'react';
import Intro from './Intro';
import About from './About';
import Signup from './Signup';



const Home = (props) => {
    return (
        <div id="home">
            <section>
                <Intro />
                <About />
                <Signup setCurrentUser={props.setCurrentUser} currentUser={props.currentUser}/>
            </section>
        </div>
    )
}

export default Home;