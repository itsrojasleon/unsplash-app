import {
  FetchImagesBeginAction,
  FetchImagesSuccessAction,
  FetchImagesFailureAction,
} from './images';

import {
  FetchUsersBeginAction,
  FetchUsersSuccessAction,
  FetchUsersFailureAction,
} from './users';

export enum ImageActionTypes {
  fetchImagesBegin,
  fetchImagesSuccess,
  fetchImagesFailure,
}

export enum UserActionTypes {
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersFailure,
}

export type ImageAction =
  | FetchImagesBeginAction
  | FetchImagesSuccessAction
  | FetchImagesFailureAction;

export type UserAction =
  | FetchUsersBeginAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction;
