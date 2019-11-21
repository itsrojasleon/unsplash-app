import React from 'react';
import { User } from '../actions';
import { FaInstagram } from 'react-icons/fa';
import '../styles/components/UserProfile.css';

export const UserProfile = ({
  name,
  profile_image,
  instagram_username,
}: User) => {
  return (
    <div className="user-profile">
      <img alt={name} src={profile_image && profile_image.large} />
      <div className="data">
        <div className="info">
          <h1>{name}</h1>
          <a
            href={`https://www.instagram.com/${instagram_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button">
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};
