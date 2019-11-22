import React from 'react';
import { Collection } from '../actions';
import { CollectionCard } from './CollectionCard';

interface Props {
  collections: Collection[];
}

export const CollectionList = ({ collections }: Props) => {
  return (
    <div>
      {collections.map(c => (
        <CollectionCard key={c.id} {...c} />
      ))}
    </div>
  );
};
