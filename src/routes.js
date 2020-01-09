import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Profile from './pages/Profile';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/:owner/:repo" exact component={Repository} />
        <Route path="/:user" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
