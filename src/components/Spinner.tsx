import React from 'react';
import '../styles/components/Spinner.css';

interface Props {
  isBig?: boolean;
}

export const Spinner = ({ isBig }: Props): JSX.Element => {
  let className = '';
  if (isBig) {
    className += ' BigSpinner';
  }
  return (
    <span aria-busy="true" className={className}>
      <span className="Spinner" aria-hidden="true">
        🌀
      </span>
    </span>
  );
};
