import React from 'react';
import { Image } from '../actions';

interface Props {
  images: Image[];
}

export const ImageList = ({ images }: Props): JSX.Element => {
  return (
    <div>
      {images.map(image => (
        <img key={image.id} src={image.urls.thumb} alt={image.description} />
      ))}
    </div>
  );
};
