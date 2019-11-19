import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/users';
import { StoreState } from '../reducers';
import { UserCard } from '../components/UserCard';

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
      {error && <div>{error}</div>}
      {isFetching && <div>Loading...</div>}
      <div>
        {response.results.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};
