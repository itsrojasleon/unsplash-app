import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions';
import { StoreState } from '../reducers/index';
import { UserProfile } from '../components/UserProfile';

export default (): JSX.Element => {
  const {
    response: { results },
    error,
    isFetching,
  } = useSelector((state: StoreState) => state.users);
  const dispatch = useDispatch();
  const { username } = useParams();

  useEffect(() => {
    dispatch(fetchUser(username || ''));
  }, [dispatch, username]);

  return (
    <div>
      {error && <div>{error}</div>}
      {isFetching && <div>Loading...</div>}
      <UserProfile {...results} />
    </div>
  );
};
