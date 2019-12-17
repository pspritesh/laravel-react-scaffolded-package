import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import About from '../components/About';
import Home from '../components/Home';
import NotFound from '../views/NotFound/NotFound'

const Main = props => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    {/*Page Not Found*/}
    <Route component={NotFound}/>
  </Switch>
);

export default Main;
