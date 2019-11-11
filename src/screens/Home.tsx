import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions';
import { StoreState } from '../reducers/index';
import { SearchBar } from '../components/SearchBar';
import { ImageList } from '../components/ImageList';

export default () => {
  const { results } = useSelector((state: StoreState) => state.images);
  const dispatch = useDispatch();

  const onSubmit = (term: string): void => {
    dispatch(fetchImages(term));
  };
  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      <div>{results.length} results</div>
      <ImageList images={results} />
    </div>
  );
};
