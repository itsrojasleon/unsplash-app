import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';

export const Header: React.FC = (): JSX.Element => {
  return (
    <div className="header-container">
      <header>
        <nav>
          <span>Logo</span>
          <div>
            <Link to="/">Photos</Link>
            <Link to="/">Collections</Link>
            <Link to="/">Users</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
