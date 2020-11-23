import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import { isAuthenticated } from '../services/api';
import { AuthProvider } from '../hooks/auth';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <AuthProvider>
      {isAuthenticated() ? (
        <Route path="/" exact component={Login} />
      ) : (
        <Route path="/dashboard" component={Dashboard} isPrivate />
      )}
    </AuthProvider>

    {/* <Route exact component={Login} />
    <Route path="/dashboard" component={Dashboard} isPrivate /> */}
  </Switch>
);

export default Routes;
