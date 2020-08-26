import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../component/VisiblePages/Home/Home';
import Languages from '../component/GetAll/Languages/Languages';
import Profile from '../component/VisiblePages/Profile/Profile';
import EditProfile from '../component/VisiblePages/EditProfile/EditProfile';
import Language from '../component/SingleFile/Language/Language';
import Expert from '../component/VisiblePages/ExpertsAll/ExpertsAll';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/languages" component={Languages} />
        <Route path="/profile/:id/edit" component={EditProfile} />
        <Route path="/languages/:id" component={Language} />
        <Route path="/experts" component={Expert} />
    </Switch>
)