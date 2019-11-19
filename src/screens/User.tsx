import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/users';
import { StoreState } from '../reducers';

export default () => {
  const { response, isFetching, error } = useSelector(
    (state: StoreState) => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers('Stephen'));
  }, [dispatch]);

  return (
    <div>
      <div>User page</div>
      {error && <div>{error}</div>}
      {isFetching && <div>Loading...</div>}
      <div>
        {response.results.map(user => (
          <div key={user.id}>
            <div>{user.first_name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
