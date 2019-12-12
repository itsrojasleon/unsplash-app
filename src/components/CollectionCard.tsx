import React from 'react';
import { Collection } from '../actions';

export const CollectionCard = ({ title, tags, preview_photos }: Collection) => {
  return (
    <div className="collection-card">
      <div className="up">
        {preview_photos &&
          preview_photos.map(
            p => p.urls && <img key={p.id} alt={p.id} src={p.urls.thumb} />
          )}
      </div>
      <div className="down">
        <h3>{title}</h3>
        <span>
          {tags &&
            tags.map((t, i) =>
              i < 3 ? <span key={t.title}>{t.title}</span> : null
            )}
        </span>
      </div>
    </div>
  );
};
