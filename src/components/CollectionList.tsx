import React from 'react';
import { Collection } from '../actions';

interface Props {
  collection: Collection;
}

export const CollectionList = ({ collection }: Props) => {
  console.log(collection);
  return (
    <div>
      <div>{collection.title}</div>
      <div>{collection.id}</div>
      <div>
        {Array.isArray(collection.tags) &&
          collection.tags.map(c => <div key={c.title}>{c.title}</div>)}
      </div>
      <br />
    </div>
  );
};
