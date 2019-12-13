import { unsplash } from '../api/unsplash';
import { Dispatch } from 'redux';
import { ImageActionTypes } from './types';

export interface Image {
  id?: number;
  urls?: { thumb?: string; full?: string };
  description?: string;
}
export interface ImageResponse {
  results: Image[];
  total: number;
  total_pages: number;
}
export interface ImageServerResponse {
  response: ImageResponse;
  isFetching: boolean;
  error: string;
  initialValue: string;
}

export interface FetchImagesBeginAction {
  type: ImageActionTypes.fetchImagesBegin;
  payload: string;
}
export interface FetchImagesSuccessAction {
  type: ImageActionTypes.fetchImagesSuccess;
  payload: ImageResponse;
}
export interface FetchImagesFailureAction {
  type: ImageActionTypes.fetchImagesFailure;
}

export const fetchImages = (query: string, total: number = 20) => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchImagesBeginAction>({
      type: ImageActionTypes.fetchImagesBegin,
      payload: query,
    });

    try {
      const response = await unsplash.get<ImageResponse>('/search/photos', {
        params: { query, per_page: total },
      });

      dispatch<FetchImagesSuccessAction>({
        type: ImageActionTypes.fetchImagesSuccess,
        payload: response.data,
      });
    } catch (e) {
      dispatch<FetchImagesFailureAction>({
        type: ImageActionTypes.fetchImagesFailure,
      });
    }
  };
};
