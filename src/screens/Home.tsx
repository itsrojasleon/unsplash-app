import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions';
import { StoreState } from '../reducers/index';
import { SearchBar } from '../components/SearchBar';
import { ImageList } from '../components/ImageList';

export default () => {
  // { results, isFetching, error }
  const state = useSelector((state: StoreState) => state.images);
  const dispatch = useDispatch();

  console.log('State:', state);

  const onSubmit = (term: string): void => {
    dispatch(fetchImages(term));
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <ImageList images={state.response.results} />
    </div>
  );
};
