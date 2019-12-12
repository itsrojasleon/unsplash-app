import React, { useEffect } from 'react';
import { fetchCollections } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../reducers';
import { CollectionList } from '../components/CollectionList';

export default (): JSX.Element => {
  const {
    response: { results },
    isFetching,
    error,
  } = useSelector((state: StoreState) => state.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollections());
  }, [dispatch]);

  return (
    <div>
      {error && <div>{error}</div>}
      {isFetching && <div>Loading...</div>}
      <h1>Collections</h1>
      <CollectionList collections={results} />
    </div>
  );
};
