import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

import '../styles/components/Header.css';

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header-container">
      <header>
        <nav>
          <div className="logo">
            <SearchBar />
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/users">Users</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
