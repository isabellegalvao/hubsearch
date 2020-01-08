import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Profile from './pages/Profile';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} component={Main} />
        <Route path="/repository" exact component={Repository} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
