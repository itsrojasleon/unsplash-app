import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions';
import { StoreState } from '../reducers/index';
import { SearchBar } from './SearchBar';
import { ImageList } from './ImageList';

export const App = (): JSX.Element => {
  const { results } = useSelector((state: StoreState) => state.images);
  const dispatch = useDispatch();

  const onSubmit = async (term: string) => {
    dispatch(fetchImages(term));
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <div>{results && results.length}</div>
      {results && <ImageList images={results} />}
    </div>
  );
};
