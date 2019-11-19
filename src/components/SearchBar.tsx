import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchImages } from '../actions';
import { MdSearch, MdClose } from 'react-icons/md';
import '../styles/components/SearchBar.css';

export const SearchBar = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [term, setTerm] = useState('');

  const onFormSubmit = (
    event: React.FormEvent<HTMLFormElement | SVGElement>
  ) => {
    if (!term) {
      // At this point I need some feedback for the user
      // Like an alert saying... 'You should search for something'
      event.preventDefault();
    } else {
      history.push('/');
      event.preventDefault();
      dispatch(fetchImages(term));
    }
  };

  const onInutChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTerm(e.currentTarget.value);
  };

  const onResetInput = (): void => {
    setTerm('');
  };

  return (
    <form className="search-bar form" onSubmit={onFormSubmit}>
      <div>
        <MdSearch onClick={onFormSubmit} className="search-bar icon" />
        {term && (
          <MdClose onClick={onResetInput} className="search-bar icon-cross" />
        )}
      </div>
      <input
        type="text"
        value={term}
        placeholder="Search free high-resolution photos"
        onChange={onInutChange}
      />
    </form>
  );
};
