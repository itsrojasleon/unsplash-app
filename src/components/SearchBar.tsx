import React, { useState } from 'react';

export const SearchBar = ({ onSubmit }: any): JSX.Element => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(term);
  };

  const onInutChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTerm(e.currentTarget.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" placeholder="Search" onChange={onInutChange} />
    </form>
  );
};
