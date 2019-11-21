import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions';
import { StoreState } from '../reducers/index';

export default (): JSX.Element => {
  const { response } = useSelector((state: StoreState) => state.users);
  const dispatch = useDispatch();
  const { username } = useParams();

  useEffect(() => {
    dispatch(fetchUser(username || ''));
  }, [dispatch, username]);

  return (
    <div>
      {!Array.isArray(response.results) && (
        <img
          alt={response.results.username}
          src={
            response.results.profile_image &&
            response.results.profile_image.large
          }
        />
      )}
    </div>
  );
};
