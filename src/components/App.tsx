import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { Spinner } from './Spinner';
import '../styles/components/App.css';

const Home = lazy(() => import('../screens/Home'));
const User = lazy(() => import('../screens/User'));
const UserProfile = lazy(() => import('../screens/UserProfile'));
const Collection = lazy(() => import('../screens/Collections'));

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Spinner isBig={true} />}>
        <div className="app">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/users" component={User} />
            <Route path="/users/:username" component={UserProfile} />
            <Route path="/collections" component={Collection} />
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};
