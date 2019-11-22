import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/users';
import { StoreState } from '../reducers';
import { UserList } from '../components/UserList';

export default () => {
  const {
    response: { results },
    isFetching,
    error,
  } = useSelector((state: StoreState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers('Stephen'));
  }, [dispatch]);

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      <UserList userData={results} />
      {error && <div>{error}</div>}
    </div>
  );
};
