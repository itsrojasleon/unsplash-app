import { unsplash } from '../api/unsplash';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Image {
  id?: number;
  urls?: { thumb: string };
  description?: string;
}
export interface Response {
  results: Image[];
  total: number;
  total_pages: number;
}
export interface ServerResponse {
  response: Response;
  isFetching: boolean;
  error: string;
}

export interface FetchImagesBeginAction {
  type: ActionTypes.fetchImagesBegin;
}
export interface FetchImagesSuccessAction {
  type: ActionTypes.fetchImagesSuccess;
  payload: Response;
}
export interface FetchImagesFailureAction {
  type: ActionTypes.fetchImagesFailure;
}

export const fetchImages = (term: string) => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchImagesBeginAction>({
      type: ActionTypes.fetchImagesBegin,
    });
    console.log('Start.......');

    try {
      const response = await unsplash.get<Response>('/search/photos', {
        params: { query: term },
      });

      dispatch<FetchImagesSuccessAction>({
        type: ActionTypes.fetchImagesSuccess,
        payload: response.data,
      });
      console.log('Fetched.........');
    } catch (e) {
      dispatch<FetchImagesFailureAction>({
        type: ActionTypes.fetchImagesFailure,
      });
      console.log('Fuck mate.......');
    }
  };
};
