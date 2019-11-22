import React from 'react';
import { Collection } from '../actions';
import { CollectionCard } from './CollectionCard';
import '../styles/components/CollectionList.css';

interface Props {
  collections: Collection[];
}

export const CollectionList = ({ collections }: Props) => {
  return (
    <div className="collection-list">
      {collections.map(c => (
        <CollectionCard key={c.id} {...c} />
      ))}
    </div>
  );
};
