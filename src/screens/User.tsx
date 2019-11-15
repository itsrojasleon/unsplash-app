import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/users';

export default () => {
  const { response, isFetching, error } = useSelector(
    (state: any) => state.users
  );
  const dispatch = useDispatch();
  console.log(response);
  useEffect(() => {
    dispatch(fetchUsers('stephen'));
  }, []);
  return (
    <div>
      <div>User page</div>
    </div>
  );
};
