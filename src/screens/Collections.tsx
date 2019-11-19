import React, { useEffect } from 'react';
import { fetchCollections } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../reducers';

export default (): JSX.Element => {
  const { response, error } = useSelector(
    (state: StoreState) => state.collections
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <div>
      {error && <div>{error}</div>}
      {response.results.map(collection => (
        <p key={collection.id}>{collection.title}</p>
      ))}
    </div>
  );
};
