import { unsplash } from '../api/unsplash';
import { Dispatch } from 'redux';
import { ImageActionTypes } from './types';

export interface Image {
  id?: number;
  urls?: { thumb: string };
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
}

export interface FetchImagesBeginAction {
  type: ImageActionTypes.fetchImagesBegin;
}
export interface FetchImagesSuccessAction {
  type: ImageActionTypes.fetchImagesSuccess;
  payload: ImageResponse;
}
export interface FetchImagesFailureAction {
  type: ImageActionTypes.fetchImagesFailure;
}

export const fetchInitialImages = () => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchImagesBeginAction>({
      type: ImageActionTypes.fetchImagesBegin,
    });

    try {
      const response = await unsplash.get('/search/photos', {
        params: { query: 'nature' },
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

export const fetchImages = (query: string) => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchImagesBeginAction>({
      type: ImageActionTypes.fetchImagesBegin,
    });

    try {
      const response = await unsplash.get<ImageResponse>('/search/photos', {
        params: { query },
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
