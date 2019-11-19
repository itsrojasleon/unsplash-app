import { combineReducers } from 'redux';
import { ImageServerResponse } from '../actions/images';
import { UserServerResponse } from '../actions/users';

import { imagesReducer } from './images';
import { usersReducer } from './users';
import { collectionReducer } from './collections';
import { CollectionServerResponse } from '../actions/collections';

export interface StoreState {
  images: ImageServerResponse;
  users: UserServerResponse;
  collections: CollectionServerResponse;
}

export const reducers = combineReducers<StoreState>({
  images: imagesReducer,
  users: usersReducer,
  collections: collectionReducer,
});
