import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions';
import { StoreState } from '../reducers/index';

export default (): JSX.Element => {
  const {
    response: { result },
  } = useSelector((state: StoreState) => state.users);
  const dispatch = useDispatch();
  const { username } = useParams();

  console.log(result);

  useEffect(() => {
    dispatch(fetchUser(username || ''));
  }, [dispatch, username]);

  return (
    <div>
      <img src={result.profile_image && result.profile_image.large} />
      <div>{result.username}</div>
    </div>
  );
};
