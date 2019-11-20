import React from 'react';
import { User } from '../actions';
import { Link } from 'react-router-dom';

export const UserCard = ({ id, username, profile_image }: User) => {
  return (
    <div key={id}>
      <div>{username}</div>
      <img alt={username} src={profile_image && profile_image.medium} />
      <Link
        to={{
          pathname: `/users/${username}`,
          state: { username },
        }}>
        Go baby
      </Link>
    </div>
  );
};
