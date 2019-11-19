import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions';
import { StoreState } from '../reducers/index';
import { ImageList } from '../components/ImageList';

export default () => {
  const { response, error, initialValue } = useSelector(
    (state: StoreState) => state.images
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages(initialValue || 'nature'));
  }, [dispatch, initialValue]);

  return (
    <div>
      {error && <div>{error}</div>}
      <ImageList images={response.results} />
    </div>
  );
};
