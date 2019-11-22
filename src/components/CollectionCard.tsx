import React from 'react';
import { Collection } from '../actions';

export const CollectionCard = ({ title, tags, preview_photos }: Collection) => {
  return (
    <div>
      {preview_photos &&
        preview_photos.map(p => (
          <div key={p.id}>{p.urls && <img src={p.urls.thumb} />}</div>
        ))}
      <div>{title}</div>
      {tags && tags.map(t => <div key={t.title}>{t.title}</div>)}
    </div>
  );
};
