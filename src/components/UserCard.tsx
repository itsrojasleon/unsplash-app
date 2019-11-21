import React from 'react';
import { User } from '../actions';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

export const UserCard = ({ name, username, profile_image }: User) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <img alt={name} src={profile_image && profile_image.medium} />
      <div className="link">
        <FaExternalLinkAlt />
        <Link
          to={{
            pathname: `/users/${username}`,
            state: { username },
          }}>
          {username}
        </Link>
      </div>
    </div>
  );
};
