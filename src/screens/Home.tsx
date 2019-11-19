import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialImages } from '../actions';
import { StoreState } from '../reducers/index';
import { ImageList } from '../components/ImageList';

export default () => {
  const { response, error } = useSelector((state: StoreState) => state.images);
  const dispatch = useDispatch();

  console.log('Response: ', response);

  useEffect(() => {
    dispatch(fetchInitialImages());
  }, [dispatch]);

  return (
    <div>
      {error && <div>{error}</div>}
      <ImageList images={response.results} />
    </div>
  );
};
