import React from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../reducers';

export default () => {
  const { response, isFetching, error } = useSelector(
    (state: StoreState) => state.users
  );

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
