import {
  FetchImagesBeginAction,
  FetchImagesSuccessAction,
  FetchImagesFailureAction,
} from './images';

import {
  FetchUsersBeginAction,
  FetchUsersSuccessAction,
  FetchUsersFailureAction,
  FetchUserSuccessAction,
} from './users';

import {
  FetchCollectionsBeginAction,
  FetchCollectionsSuccessAction,
  FetchCollectionsFailureAction,
} from './collections';

export enum ImageActionTypes {
  fetchImagesBegin,
  fetchImagesSuccess,
  fetchImagesFailure,
}

export enum UserActionTypes {
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserSuccess,
}

export enum CollectionActionTypes {
  fetchCollectionsBegin,
  fetchCollectionSuccess,
  fetchCollectionFailure,
}

export type ImageAction =
  | FetchImagesBeginAction
  | FetchImagesSuccessAction
  | FetchImagesFailureAction;

export type UserAction =
  | FetchUsersBeginAction
  | FetchUsersSuccessAction
  | FetchUsersFailureAction
  | FetchUserSuccessAction;

export type CollectionAction =
  | FetchCollectionsBeginAction
  | FetchCollectionsSuccessAction
  | FetchCollectionsFailureAction;
