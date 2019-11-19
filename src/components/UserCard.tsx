import React from 'react';
import { User } from '../actions';
// import {Link} from 'react-router-dom';

export const UserCard = ({ id, username, profile_image }: User) => {
  return (
    <div key={id}>
      <div>{username}</div>
      <img src={profile_image && profile_image.medium} />
    </div>
  );
};
