import React from 'react';
import { isAuthenticated } from '../services/api';
// import { Switch } from 'react-router-dom';

// import Route from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  // <Switch>
  //   <Route path="/" exact component={Login} />
  //   <Route path="/dashboard" component={Dashboard} isPrivate />
  // </Switch>
  <>{isAuthenticated() ? <Dashboard /> : <Login />}</>
);

export default Routes;
