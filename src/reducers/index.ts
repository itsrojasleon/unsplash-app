import { combineReducers } from 'redux';
import { ImageServerResponse } from '../actions/images';
import { UserServerResponse } from '../actions/users';

import { imagesReducer } from './images';
import { usersReducer } from './users';

export interface StoreState {
  images: ImageServerResponse;
  users: UserServerResponse;
}

export const reducers = combineReducers<StoreState>({
  images: imagesReducer,
  users: usersReducer,
});
