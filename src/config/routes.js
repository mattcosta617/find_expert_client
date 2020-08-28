import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../component/VisiblePages/Home/Home';
import Languages from '../component/GetAll/Languages/Languages';
import Language from '../component/SingleFile/Language/Language';
// import ProjectList from '../component/Lists/ProjectList/ProjectList';
import Expert from '../component/VisiblePages/ExpertsAll/ExpertsAll';
import Profile from '../component/VisiblePages/Profile/Profile';
import EditProfile from '../component/VisiblePages/EditProfile/EditProfile';
import UserProfile from '../component/VisiblePages/Profile/UserProfile';
import Login from '../component/VisiblePages/login/Login';
import ProjectsContainer from '../component/MainProject/container/ProjectsContainer';

export default ({setCurrentUser, currentUser}) => {
    return (
    <Switch>
        <Route exact path="/login" render={() => <Login setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
        <Route exact path="/" render={() => <Home setCurrentUser={setCurrentUser} currentUser={currentUser} />}/>
        <Route path="/profile/:id/edit" component={EditProfile} />
        <Route path="/profile/:id" component={UserProfile} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/languages/:id" component={Language} />
        <Route exact path="/languages" component={Languages} />
        <Route path="/experts" component={Expert} />
        {/* <Route path="/projects" component={ProjectList} /> */}
        <Route path="/projects" component={ProjectsContainer} />
    </Switch>
)}