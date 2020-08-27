import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../component/VisiblePages/Home/Home';
import Languages from '../component/GetAll/Languages/Languages';
import Profile from '../component/VisiblePages/Profile/Profile';
import EditProfile from '../component/VisiblePages/EditProfile/EditProfile';
import Language from '../component/SingleFile/Language/Language';
import Expert from '../component/VisiblePages/ExpertsAll/ExpertsAll';
import UserProfile from '../component/VisiblePages/Profile/UserProfile';

export default ({setCurrentUser, currentUser}) => {
    return (
    <Switch>
        <Route exact path="/" render={() => <Home setCurrentUser={setCurrentUser} currentUser={currentUser} />}/>
        <Route exact path="/profile/" component={Profile} />
        <Route path="/profile/:id" component={UserProfile} />
        <Route exact path="/languages" component={Languages} />
        <Route path="/profile/:id/edit" component={EditProfile} />
        <Route path="/languages/:id" component={Language} />
        <Route path="/experts" component={Expert} />
    </Switch>
)}