import React from 'react';
import Intro from './Intro';
import About from './About';
import Login from './Login';
import Signup from './Signup';



const Home = () => {
    return (
        <div id="home">
            <Intro />
            <About />
            <Login />
            <Signup />
        </div>
    )
}

export default Home;