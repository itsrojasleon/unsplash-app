import React from 'react';
import { Image } from '../actions';
import { ImageCard } from './ImageCard';
import './ImageList.css';

interface Props {
  images: Image[];
}

export const ImageList = ({ images }: Props): JSX.Element => {
  return (
    <div className="image-list">
      {images.map(image => (
        <ImageCard key={image.id} {...image} />
      ))}
    </div>
  );
};
