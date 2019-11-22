import React, { useEffect } from 'react';
import { fetchCollections } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../reducers';
import { CollectionList } from '../components/CollectionList';

export default (): JSX.Element => {
  const { response, isFetching, error } = useSelector(
    (state: StoreState) => state.collections
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <div>
      {error && <div>{error}</div>}
      {isFetching && <div>Loading...</div>}
      {response.results.map(collection => (
        <CollectionList key={collection.id} collection={collection} />
      ))}
    </div>
  );
};
