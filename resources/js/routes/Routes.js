import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import About from '../components/About';
import App from '../views/App';
import Home from '../components/Home';
import NotFound from '../views/NotFound/NotFound'

const Main = props => (
  <Switch>
    <Route exact path='/' component={App}/>
    <Route path='/about' component={About}/>
    <Route path='/home' component={Home}/>
    {/*Page Not Found*/}
    <Route component={NotFound}/>
  </Switch>
);

export default Main;
