import React from 'react';
import '../styles/components/Header.css';

export const Header = () => {
  return (
    <div className="header-container">
      <header>
        <nav>
          <span>Logo</span>
          <div>
            <a href="#" target="_blank">
              Hello
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
