import { CollectionActionTypes } from './types';
import { Dispatch } from 'redux';
import { unsplash } from '../api/unsplash';

export interface Collection {
  id?: number;
  urls?: { thumb: string };
  title?: string;
}
export interface CollectionResponse {
  results: Collection[];
  total: number;
  total_pages: number;
}
export interface CollectionServerResponse {
  response: CollectionResponse;
  isFetching: boolean;
  error: string;
}

export interface FetchCollectionsBeginAction {
  type: CollectionActionTypes.fetchCollectionsBegin;
}
export interface FetchCollectionsSuccessAction {
  type: CollectionActionTypes.fetchCollectionSuccess;
  payload: CollectionResponse;
}
export interface FetchCollectionsFailureAction {
  type: CollectionActionTypes.fetchCollectionFailure;
}

export const fetchCollections = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await unsplash.get<CollectionResponse>(
        '/search/collections',
        {
          params: { query: 'Hello' },
        }
      );

      dispatch<FetchCollectionsSuccessAction>({
        type: CollectionActionTypes.fetchCollectionSuccess,
        payload: response.data,
      });
    } catch (e) {
      console.log('Something went wrong');
    }
  };
};