import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

import '../styles/components/Header.css';

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header-container">
      <header>
        <nav>
          <SearchBar />
          <div>
            <Link to="/">Photos</Link>
            <Link to="/">Collections</Link>
            <Link to="/users">Users</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
