import {
  FetchImagesBeginAction,
  FetchImagesSuccessAction,
  FetchImagesFailureAction,
} from './images';

export enum ActionTypes {
  fetchImagesBegin,
  fetchImagesSuccess,
  fetchImagesFailure,
}
export type Action =
  | FetchImagesBeginAction
  | FetchImagesSuccessAction
  | FetchImagesFailureAction;
