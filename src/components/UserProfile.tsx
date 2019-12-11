import React from 'react';
import { User } from '../actions';
import { FaInstagram } from 'react-icons/fa';

// Let's reuse this component created already
// import { ImageList } from './ImageList';
import { ImageCard } from './ImageCard';

import '../styles/components/UserProfile.css';
import '../styles/components/ImageList.css';

export const UserProfile = ({
  name,
  profile_image,
  instagram_username,
  photos,
}: User) => {
  return (
    <>
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
      <div className="image-list">
        {photos && photos.map(p => <ImageCard key={p.id} urls={p.urls} />)}
      </div>
    </>
  );
};
