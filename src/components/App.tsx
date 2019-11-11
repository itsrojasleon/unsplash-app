import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './Header';
const Home = lazy(() => import('../screens/Home'));

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
// 240	241	243
