import { combineReducers } from 'redux';
import { ServerResponse } from '../actions';

import { imagesReducer } from './images';
import { usersReducer } from './users';

export interface StoreState {
  images: ServerResponse;
  users: any;
}

export const reducers = combineReducers<StoreState>({
  images: imagesReducer,
  users: usersReducer,
});
