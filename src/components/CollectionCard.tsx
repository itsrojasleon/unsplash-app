import React from 'react';
import { Collection } from '../actions';

export const CollectionCard = ({ title, tags, preview_photos }: Collection) => {
  return (
    <div className="collection-card">
      {/* {preview_photos &&
        preview_photos.map(
          p => p.urls && <img key={p.id} alt={p.id} src={p.urls.thumb} />
        )} */}
      {preview_photos && <img src={preview_photos[0].urls.thumb} />}
      <div>{title}</div>
      {tags && tags.map(t => <div key={t.title}>{t.title}</div>)}
    </div>
  );
};
