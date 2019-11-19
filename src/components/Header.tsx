import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

import '../styles/components/Header.css';

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header-container">
      <header>
        <nav>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <span>🏙</span>
            <SearchBar />
          </div>
          <div>
            <Link to="/">Photos</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/users">Users</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
