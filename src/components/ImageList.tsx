import React from 'react';

interface ImageProps {
  id: string;
  urls: { thumb: string };
  user: { name: string };
}

interface Props {
  images: ImageProps[];
}

export const ImageList = ({ images }: Props): JSX.Element => {
  console.log('Props:', images);
  return (
    <div>
      {images.map(image => (
        <img key={image.id} src={image.urls.thumb} alt={image.user.name} />
      ))}
    </div>
  );
};
