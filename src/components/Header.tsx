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
            <Link to="/">
              <svg height="40" width="40">
                <circle fill="black" r="20" cx="20" cy="20" />
              </svg>
            </Link>
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
