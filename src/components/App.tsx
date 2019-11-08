import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Header } from './Header';

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
