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
  payload: ServerResponse;
}

export const fetchImages = (term: string) => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchImagesBeginAction>({
      type: ActionTypes.fetchImagesBegin,
    });

    const response = await unsplash.get<Response>('/search/photos', {
      params: { query: term },
    });
    // console.log(response);

    // if (response.status !== 200) {
    //   dispatch<ErrorImagesAction>({
    //     type: ActionTypes.errorImages,
    //     payload: {}
    //   });
    // }

    dispatch<FetchImagesSuccessAction>({
      type: ActionTypes.fetchImagesSuccess,
      payload: response.data,
    });
  };
};
