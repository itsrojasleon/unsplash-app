import { combineReducers } from 'redux';
import { imagesReducer } from './images';
import { ServerResponse } from '../actions';

export interface StoreState {
  images: ServerResponse;
}

export const reducers = combineReducers<StoreState>({
  images: imagesReducer
});
