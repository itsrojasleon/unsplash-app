import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { Spinner } from './Spinner';

const Home = lazy(() => import('../screens/Home'));
const User = lazy(() => import('../screens/User'));

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner isBig={true} />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={User} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
