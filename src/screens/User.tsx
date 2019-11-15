import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/users';
import { StoreState } from '../reducers';
import { SearchBar } from '../components/SearchBar';

export default () => {
  const { response, isFetching, error } = useSelector(
    (state: StoreState) => state.users
  );
  const dispatch = useDispatch();

  const onSubmit = (term: string): void => {
    dispatch(fetchUsers(term));
  };
  return (
    <div>
      <div>User page</div>
      {error && <div>{error}</div>}
      {isFetching && <div>Loading...</div>}
      <SearchBar onSubmit={onSubmit} isLoading={false} />
      <div>
        {response.results.map(user => (
          <div key={user.id}>{user.first_name}</div>
        ))}
      </div>
    </div>
  );
};
