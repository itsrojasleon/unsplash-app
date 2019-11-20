import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../actions';

export default () => {
  const dispatch = useDispatch();
  const { username } = useParams();

  useEffect(() => {
    dispatch(fetchUser(username || ''));
  }, [dispatch, username]);

  return <div>{username}</div>;
};
