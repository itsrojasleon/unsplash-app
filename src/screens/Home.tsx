import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions';
import { StoreState } from '../reducers/index';
import { SearchBar } from '../components/SearchBar';
import { ImageList } from '../components/ImageList';
import { Spinner } from '../components/Spinner';

export default () => {
  const { response, isFetching, error } = useSelector(
    (state: StoreState) => state.images
  );
  const dispatch = useDispatch();

  const onSubmit = (term: string): void => {
    dispatch(fetchImages(term));
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {/* Probably I'll dont need it */}
      {/* {isFetching && <Spinner isBig />} */}
      {error && <div>{error}</div>}
      <ImageList images={response.results} />
    </div>
  );
};
